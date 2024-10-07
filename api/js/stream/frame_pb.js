// source: stream/frame.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
goog.object.extend(proto, google_protobuf_timestamp_pb);
var common_common_pb = require('../common/common_pb.js');
goog.object.extend(proto, common_common_pb);
var gw_gw_pb = require('../gw/gw_pb.js');
goog.object.extend(proto, gw_gw_pb);
goog.exportSymbol('proto.stream.DownlinkFrameLog', null, global);
goog.exportSymbol('proto.stream.UplinkFrameLog', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.stream.UplinkFrameLog = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.stream.UplinkFrameLog.repeatedFields_, null);
};
goog.inherits(proto.stream.UplinkFrameLog, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.stream.UplinkFrameLog.displayName = 'proto.stream.UplinkFrameLog';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.stream.DownlinkFrameLog = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.stream.DownlinkFrameLog, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.stream.DownlinkFrameLog.displayName = 'proto.stream.DownlinkFrameLog';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.stream.UplinkFrameLog.repeatedFields_ = [3];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.stream.UplinkFrameLog.prototype.toObject = function(opt_includeInstance) {
  return proto.stream.UplinkFrameLog.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.stream.UplinkFrameLog} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.stream.UplinkFrameLog.toObject = function(includeInstance, msg) {
  var f, obj = {
    phyPayload: msg.getPhyPayload_asB64(),
    txInfo: (f = msg.getTxInfo()) && gw_gw_pb.UplinkTxInfo.toObject(includeInstance, f),
    rxInfoList: jspb.Message.toObjectList(msg.getRxInfoList(),
    gw_gw_pb.UplinkRxInfo.toObject, includeInstance),
    mType: jspb.Message.getFieldWithDefault(msg, 4, 0),
    devAddr: jspb.Message.getFieldWithDefault(msg, 5, ""),
    devEui: jspb.Message.getFieldWithDefault(msg, 6, ""),
    time: (f = msg.getTime()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    plaintextFOpts: jspb.Message.getBooleanFieldWithDefault(msg, 8, false),
    plaintextFrmPayload: jspb.Message.getBooleanFieldWithDefault(msg, 9, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.stream.UplinkFrameLog}
 */
proto.stream.UplinkFrameLog.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.stream.UplinkFrameLog;
  return proto.stream.UplinkFrameLog.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.stream.UplinkFrameLog} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.stream.UplinkFrameLog}
 */
proto.stream.UplinkFrameLog.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setPhyPayload(value);
      break;
    case 2:
      var value = new gw_gw_pb.UplinkTxInfo;
      reader.readMessage(value,gw_gw_pb.UplinkTxInfo.deserializeBinaryFromReader);
      msg.setTxInfo(value);
      break;
    case 3:
      var value = new gw_gw_pb.UplinkRxInfo;
      reader.readMessage(value,gw_gw_pb.UplinkRxInfo.deserializeBinaryFromReader);
      msg.addRxInfo(value);
      break;
    case 4:
      var value = /** @type {!proto.common.MType} */ (reader.readEnum());
      msg.setMType(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setDevAddr(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setDevEui(value);
      break;
    case 7:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setTime(value);
      break;
    case 8:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setPlaintextFOpts(value);
      break;
    case 9:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setPlaintextFrmPayload(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.stream.UplinkFrameLog.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.stream.UplinkFrameLog.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.stream.UplinkFrameLog} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.stream.UplinkFrameLog.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPhyPayload_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
  f = message.getTxInfo();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      gw_gw_pb.UplinkTxInfo.serializeBinaryToWriter
    );
  }
  f = message.getRxInfoList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      gw_gw_pb.UplinkRxInfo.serializeBinaryToWriter
    );
  }
  f = message.getMType();
  if (f !== 0.0) {
    writer.writeEnum(
      4,
      f
    );
  }
  f = message.getDevAddr();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getDevEui();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getTime();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getPlaintextFOpts();
  if (f) {
    writer.writeBool(
      8,
      f
    );
  }
  f = message.getPlaintextFrmPayload();
  if (f) {
    writer.writeBool(
      9,
      f
    );
  }
};


/**
 * optional bytes phy_payload = 1;
 * @return {!(string|Uint8Array)}
 */
proto.stream.UplinkFrameLog.prototype.getPhyPayload = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes phy_payload = 1;
 * This is a type-conversion wrapper around `getPhyPayload()`
 * @return {string}
 */
proto.stream.UplinkFrameLog.prototype.getPhyPayload_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getPhyPayload()));
};


/**
 * optional bytes phy_payload = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getPhyPayload()`
 * @return {!Uint8Array}
 */
proto.stream.UplinkFrameLog.prototype.getPhyPayload_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getPhyPayload()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.stream.UplinkFrameLog} returns this
 */
proto.stream.UplinkFrameLog.prototype.setPhyPayload = function(value) {
  return jspb.Message.setProto3BytesField(this, 1, value);
};


/**
 * optional gw.UplinkTxInfo tx_info = 2;
 * @return {?proto.gw.UplinkTxInfo}
 */
proto.stream.UplinkFrameLog.prototype.getTxInfo = function() {
  return /** @type{?proto.gw.UplinkTxInfo} */ (
    jspb.Message.getWrapperField(this, gw_gw_pb.UplinkTxInfo, 2));
};


/**
 * @param {?proto.gw.UplinkTxInfo|undefined} value
 * @return {!proto.stream.UplinkFrameLog} returns this
*/
proto.stream.UplinkFrameLog.prototype.setTxInfo = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.stream.UplinkFrameLog} returns this
 */
proto.stream.UplinkFrameLog.prototype.clearTxInfo = function() {
  return this.setTxInfo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.stream.UplinkFrameLog.prototype.hasTxInfo = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * repeated gw.UplinkRxInfo rx_info = 3;
 * @return {!Array<!proto.gw.UplinkRxInfo>}
 */
proto.stream.UplinkFrameLog.prototype.getRxInfoList = function() {
  return /** @type{!Array<!proto.gw.UplinkRxInfo>} */ (
    jspb.Message.getRepeatedWrapperField(this, gw_gw_pb.UplinkRxInfo, 3));
};


/**
 * @param {!Array<!proto.gw.UplinkRxInfo>} value
 * @return {!proto.stream.UplinkFrameLog} returns this
*/
proto.stream.UplinkFrameLog.prototype.setRxInfoList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.gw.UplinkRxInfo=} opt_value
 * @param {number=} opt_index
 * @return {!proto.gw.UplinkRxInfo}
 */
proto.stream.UplinkFrameLog.prototype.addRxInfo = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.gw.UplinkRxInfo, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.stream.UplinkFrameLog} returns this
 */
proto.stream.UplinkFrameLog.prototype.clearRxInfoList = function() {
  return this.setRxInfoList([]);
};


/**
 * optional common.MType m_type = 4;
 * @return {!proto.common.MType}
 */
proto.stream.UplinkFrameLog.prototype.getMType = function() {
  return /** @type {!proto.common.MType} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {!proto.common.MType} value
 * @return {!proto.stream.UplinkFrameLog} returns this
 */
proto.stream.UplinkFrameLog.prototype.setMType = function(value) {
  return jspb.Message.setProto3EnumField(this, 4, value);
};


/**
 * optional string dev_addr = 5;
 * @return {string}
 */
proto.stream.UplinkFrameLog.prototype.getDevAddr = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.stream.UplinkFrameLog} returns this
 */
proto.stream.UplinkFrameLog.prototype.setDevAddr = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string dev_eui = 6;
 * @return {string}
 */
proto.stream.UplinkFrameLog.prototype.getDevEui = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.stream.UplinkFrameLog} returns this
 */
proto.stream.UplinkFrameLog.prototype.setDevEui = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional google.protobuf.Timestamp time = 7;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.stream.UplinkFrameLog.prototype.getTime = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 7));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.stream.UplinkFrameLog} returns this
*/
proto.stream.UplinkFrameLog.prototype.setTime = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.stream.UplinkFrameLog} returns this
 */
proto.stream.UplinkFrameLog.prototype.clearTime = function() {
  return this.setTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.stream.UplinkFrameLog.prototype.hasTime = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional bool plaintext_f_opts = 8;
 * @return {boolean}
 */
proto.stream.UplinkFrameLog.prototype.getPlaintextFOpts = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 8, false));
};


/**
 * @param {boolean} value
 * @return {!proto.stream.UplinkFrameLog} returns this
 */
proto.stream.UplinkFrameLog.prototype.setPlaintextFOpts = function(value) {
  return jspb.Message.setProto3BooleanField(this, 8, value);
};


/**
 * optional bool plaintext_frm_payload = 9;
 * @return {boolean}
 */
proto.stream.UplinkFrameLog.prototype.getPlaintextFrmPayload = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 9, false));
};


/**
 * @param {boolean} value
 * @return {!proto.stream.UplinkFrameLog} returns this
 */
proto.stream.UplinkFrameLog.prototype.setPlaintextFrmPayload = function(value) {
  return jspb.Message.setProto3BooleanField(this, 9, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.stream.DownlinkFrameLog.prototype.toObject = function(opt_includeInstance) {
  return proto.stream.DownlinkFrameLog.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.stream.DownlinkFrameLog} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.stream.DownlinkFrameLog.toObject = function(includeInstance, msg) {
  var f, obj = {
    time: (f = msg.getTime()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    phyPayload: msg.getPhyPayload_asB64(),
    txInfo: (f = msg.getTxInfo()) && gw_gw_pb.DownlinkTxInfo.toObject(includeInstance, f),
    downlinkId: jspb.Message.getFieldWithDefault(msg, 4, 0),
    gatewayId: jspb.Message.getFieldWithDefault(msg, 5, ""),
    mType: jspb.Message.getFieldWithDefault(msg, 6, 0),
    devAddr: jspb.Message.getFieldWithDefault(msg, 7, ""),
    devEui: jspb.Message.getFieldWithDefault(msg, 8, ""),
    plaintextFOpts: jspb.Message.getBooleanFieldWithDefault(msg, 9, false),
    plaintextFrmPayload: jspb.Message.getBooleanFieldWithDefault(msg, 10, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.stream.DownlinkFrameLog}
 */
proto.stream.DownlinkFrameLog.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.stream.DownlinkFrameLog;
  return proto.stream.DownlinkFrameLog.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.stream.DownlinkFrameLog} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.stream.DownlinkFrameLog}
 */
proto.stream.DownlinkFrameLog.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setTime(value);
      break;
    case 2:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setPhyPayload(value);
      break;
    case 3:
      var value = new gw_gw_pb.DownlinkTxInfo;
      reader.readMessage(value,gw_gw_pb.DownlinkTxInfo.deserializeBinaryFromReader);
      msg.setTxInfo(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setDownlinkId(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setGatewayId(value);
      break;
    case 6:
      var value = /** @type {!proto.common.MType} */ (reader.readEnum());
      msg.setMType(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setDevAddr(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setDevEui(value);
      break;
    case 9:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setPlaintextFOpts(value);
      break;
    case 10:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setPlaintextFrmPayload(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.stream.DownlinkFrameLog.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.stream.DownlinkFrameLog.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.stream.DownlinkFrameLog} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.stream.DownlinkFrameLog.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTime();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getPhyPayload_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      2,
      f
    );
  }
  f = message.getTxInfo();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      gw_gw_pb.DownlinkTxInfo.serializeBinaryToWriter
    );
  }
  f = message.getDownlinkId();
  if (f !== 0) {
    writer.writeUint32(
      4,
      f
    );
  }
  f = message.getGatewayId();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getMType();
  if (f !== 0.0) {
    writer.writeEnum(
      6,
      f
    );
  }
  f = message.getDevAddr();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getDevEui();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
  f = message.getPlaintextFOpts();
  if (f) {
    writer.writeBool(
      9,
      f
    );
  }
  f = message.getPlaintextFrmPayload();
  if (f) {
    writer.writeBool(
      10,
      f
    );
  }
};


/**
 * optional google.protobuf.Timestamp time = 1;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.stream.DownlinkFrameLog.prototype.getTime = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 1));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.stream.DownlinkFrameLog} returns this
*/
proto.stream.DownlinkFrameLog.prototype.setTime = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.stream.DownlinkFrameLog} returns this
 */
proto.stream.DownlinkFrameLog.prototype.clearTime = function() {
  return this.setTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.stream.DownlinkFrameLog.prototype.hasTime = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional bytes phy_payload = 2;
 * @return {!(string|Uint8Array)}
 */
proto.stream.DownlinkFrameLog.prototype.getPhyPayload = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * optional bytes phy_payload = 2;
 * This is a type-conversion wrapper around `getPhyPayload()`
 * @return {string}
 */
proto.stream.DownlinkFrameLog.prototype.getPhyPayload_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getPhyPayload()));
};


/**
 * optional bytes phy_payload = 2;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getPhyPayload()`
 * @return {!Uint8Array}
 */
proto.stream.DownlinkFrameLog.prototype.getPhyPayload_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getPhyPayload()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.stream.DownlinkFrameLog} returns this
 */
proto.stream.DownlinkFrameLog.prototype.setPhyPayload = function(value) {
  return jspb.Message.setProto3BytesField(this, 2, value);
};


/**
 * optional gw.DownlinkTxInfo tx_info = 3;
 * @return {?proto.gw.DownlinkTxInfo}
 */
proto.stream.DownlinkFrameLog.prototype.getTxInfo = function() {
  return /** @type{?proto.gw.DownlinkTxInfo} */ (
    jspb.Message.getWrapperField(this, gw_gw_pb.DownlinkTxInfo, 3));
};


/**
 * @param {?proto.gw.DownlinkTxInfo|undefined} value
 * @return {!proto.stream.DownlinkFrameLog} returns this
*/
proto.stream.DownlinkFrameLog.prototype.setTxInfo = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.stream.DownlinkFrameLog} returns this
 */
proto.stream.DownlinkFrameLog.prototype.clearTxInfo = function() {
  return this.setTxInfo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.stream.DownlinkFrameLog.prototype.hasTxInfo = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional uint32 downlink_id = 4;
 * @return {number}
 */
proto.stream.DownlinkFrameLog.prototype.getDownlinkId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.stream.DownlinkFrameLog} returns this
 */
proto.stream.DownlinkFrameLog.prototype.setDownlinkId = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional string gateway_id = 5;
 * @return {string}
 */
proto.stream.DownlinkFrameLog.prototype.getGatewayId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.stream.DownlinkFrameLog} returns this
 */
proto.stream.DownlinkFrameLog.prototype.setGatewayId = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional common.MType m_type = 6;
 * @return {!proto.common.MType}
 */
proto.stream.DownlinkFrameLog.prototype.getMType = function() {
  return /** @type {!proto.common.MType} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {!proto.common.MType} value
 * @return {!proto.stream.DownlinkFrameLog} returns this
 */
proto.stream.DownlinkFrameLog.prototype.setMType = function(value) {
  return jspb.Message.setProto3EnumField(this, 6, value);
};


/**
 * optional string dev_addr = 7;
 * @return {string}
 */
proto.stream.DownlinkFrameLog.prototype.getDevAddr = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.stream.DownlinkFrameLog} returns this
 */
proto.stream.DownlinkFrameLog.prototype.setDevAddr = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional string dev_eui = 8;
 * @return {string}
 */
proto.stream.DownlinkFrameLog.prototype.getDevEui = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.stream.DownlinkFrameLog} returns this
 */
proto.stream.DownlinkFrameLog.prototype.setDevEui = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};


/**
 * optional bool plaintext_f_opts = 9;
 * @return {boolean}
 */
proto.stream.DownlinkFrameLog.prototype.getPlaintextFOpts = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 9, false));
};


/**
 * @param {boolean} value
 * @return {!proto.stream.DownlinkFrameLog} returns this
 */
proto.stream.DownlinkFrameLog.prototype.setPlaintextFOpts = function(value) {
  return jspb.Message.setProto3BooleanField(this, 9, value);
};


/**
 * optional bool plaintext_frm_payload = 10;
 * @return {boolean}
 */
proto.stream.DownlinkFrameLog.prototype.getPlaintextFrmPayload = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 10, false));
};


/**
 * @param {boolean} value
 * @return {!proto.stream.DownlinkFrameLog} returns this
 */
proto.stream.DownlinkFrameLog.prototype.setPlaintextFrmPayload = function(value) {
  return jspb.Message.setProto3BooleanField(this, 10, value);
};


goog.object.extend(exports, proto.stream);