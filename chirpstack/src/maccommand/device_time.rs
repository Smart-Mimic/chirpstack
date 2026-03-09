use std::time::Duration;

use anyhow::Result;
use chrono::{DateTime, Utc};
use tracing::{debug, info, warn};

use crate::gpstime::ToGpsTime;
use crate::storage::device;
use crate::uplink::{helpers, UplinkFrameSet};

pub fn handle(
    uplink_frame_set: &UplinkFrameSet,
    dev: &device::Device,
    block: &lrwn::MACCommandSet,
) -> Result<Option<lrwn::MACCommandSet>> {
    let _ = (**block)
        .first()
        .ok_or_else(|| anyhow!("Expected DeviceTimeReq"))?;

    if let lrwn::Payload::MACPayload(ref mac_payload) = uplink_frame_set.phy_payload.payload {
        if let Some(197) = mac_payload.f_port {
            debug!(dev_eui = %dev.dev_eui, "Uplink received on port 197");
            
            if let Some(ref frm_payload) = mac_payload.frm_payload {
                let payload_hex = hex::encode(frm_payload);
                debug!(dev_eui = %dev.dev_eui, payload = %payload_hex, "Port 197 payload");
                
                if payload_hex.contains("00000000") {
                    info!(dev_eui = %dev.dev_eui, "Payload contains 00000000, sending DeviceTimeAns");
                    
                    let rx_time: DateTime<Utc> = helpers::get_rx_timestamp(&uplink_frame_set.rx_info_set).into();
                    let gps_time = rx_time.to_gps_time();

                    info!(dev_eui = %dev.dev_eui, rx_time = %rx_time, gps_time = %gps_time.num_seconds(), "Sending DeviceTimeAns for port 197");

                    return Ok(Some(lrwn::MACCommandSet::new(vec![
                        lrwn::MACCommand::DeviceTimeAns(lrwn::DeviceTimeAnsPayload {
                            time_since_gps_epoch: match gps_time.to_std() {
                                Ok(v) => v,
                                Err(e) => {
                                    warn!(error = %e, "To GPS time error");
                                    Duration::from_secs(0)
                                }
                            },
                        }),
                    ])));
                }
            }
        }
    }

    let rx_time: DateTime<Utc> = helpers::get_rx_timestamp(&uplink_frame_set.rx_info_set).into();
    let gps_time = rx_time.to_gps_time();

    info!(dev_eui = %dev.dev_eui, rx_time = %rx_time, gps_time = %gps_time.num_seconds(), "DeviceTimeReq received");

    Ok(Some(lrwn::MACCommandSet::new(vec![
        lrwn::MACCommand::DeviceTimeAns(lrwn::DeviceTimeAnsPayload {
            time_since_gps_epoch: match gps_time.to_std() {
                Ok(v) => v,
                Err(e) => {
                    warn!(error = %e, "To GPS time error");
                    Duration::from_secs(0)
                }
            },
        }),
    ])))
}

#[cfg(test)]
pub mod test {
    use super::*;
    use chirpstack_api::gw;
    use chrono::Utc;
    use std::collections::HashMap;
    use uuid::Uuid;

    #[test]
    fn test_handle() {
        let rx_time = Utc::now();

        let ufs = UplinkFrameSet {
            uplink_set_id: Uuid::new_v4(),
            dr: 0,
            ch: 0,
            phy_payload: lrwn::PhyPayload {
                mhdr: lrwn::MHDR {
                    m_type: lrwn::MType::UnconfirmedDataUp,
                    major: lrwn::Major::LoRaWANR1,
                },
                payload: lrwn::Payload::MACPayload(lrwn::MACPayload {
                    fhdr: Default::default(),
                    f_port: None,
                    frm_payload: None,
                }),
                mic: None,
            },
            tx_info: Default::default(),
            rx_info_set: vec![gw::UplinkRxInfo {
                gw_time: Some(rx_time.into()),
                ..Default::default()
            }],
            gateway_private_up_map: HashMap::new(),
            gateway_private_down_map: HashMap::new(),
            gateway_tenant_id_map: HashMap::new(),
            region_common_name: lrwn::region::CommonName::EU868,
            region_config_id: "eu868".into(),
            roaming_meta_data: None,
        };

        let gps_time = rx_time.to_gps_time();

        let dev: device::Device = Default::default();
        let block = lrwn::MACCommandSet::new(vec![lrwn::MACCommand::DeviceTimeReq]);

        let resp = handle(&ufs, &dev, &block).unwrap();

        assert_eq!(
            Some(lrwn::MACCommandSet::new(vec![
                lrwn::MACCommand::DeviceTimeAns(lrwn::DeviceTimeAnsPayload {
                    time_since_gps_epoch: gps_time.to_std().unwrap(),
                })
            ])),
            resp
        );
    }
}
