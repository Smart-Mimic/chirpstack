/**
 * @fileoverview gRPC-Web generated client stub for api
 * @enhanceable
 * @public
 */

// Code generated by protoc-gen-grpc-web. DO NOT EDIT.
// versions:
// 	protoc-gen-grpc-web v1.4.2
// 	protoc              v3.12.4
// source: api/multicast_group.proto


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var google_api_annotations_pb = require('../google/api/annotations_pb.js')

var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js')

var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js')

var common_common_pb = require('../common/common_pb.js')
const proto = {};
proto.api = require('./multicast_group_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.api.MulticastGroupServiceClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options.format = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname.replace(/\/+$/, '');

};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.api.MulticastGroupServicePromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options.format = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname.replace(/\/+$/, '');

};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.api.CreateMulticastGroupRequest,
 *   !proto.api.CreateMulticastGroupResponse>}
 */
const methodDescriptor_MulticastGroupService_Create = new grpc.web.MethodDescriptor(
  '/api.MulticastGroupService/Create',
  grpc.web.MethodType.UNARY,
  proto.api.CreateMulticastGroupRequest,
  proto.api.CreateMulticastGroupResponse,
  /**
   * @param {!proto.api.CreateMulticastGroupRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.api.CreateMulticastGroupResponse.deserializeBinary
);


/**
 * @param {!proto.api.CreateMulticastGroupRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.api.CreateMulticastGroupResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.api.CreateMulticastGroupResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.api.MulticastGroupServiceClient.prototype.create =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/api.MulticastGroupService/Create',
      request,
      metadata || {},
      methodDescriptor_MulticastGroupService_Create,
      callback);
};


/**
 * @param {!proto.api.CreateMulticastGroupRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.api.CreateMulticastGroupResponse>}
 *     Promise that resolves to the response
 */
proto.api.MulticastGroupServicePromiseClient.prototype.create =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/api.MulticastGroupService/Create',
      request,
      metadata || {},
      methodDescriptor_MulticastGroupService_Create);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.api.GetMulticastGroupRequest,
 *   !proto.api.GetMulticastGroupResponse>}
 */
const methodDescriptor_MulticastGroupService_Get = new grpc.web.MethodDescriptor(
  '/api.MulticastGroupService/Get',
  grpc.web.MethodType.UNARY,
  proto.api.GetMulticastGroupRequest,
  proto.api.GetMulticastGroupResponse,
  /**
   * @param {!proto.api.GetMulticastGroupRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.api.GetMulticastGroupResponse.deserializeBinary
);


/**
 * @param {!proto.api.GetMulticastGroupRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.api.GetMulticastGroupResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.api.GetMulticastGroupResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.api.MulticastGroupServiceClient.prototype.get =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/api.MulticastGroupService/Get',
      request,
      metadata || {},
      methodDescriptor_MulticastGroupService_Get,
      callback);
};


/**
 * @param {!proto.api.GetMulticastGroupRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.api.GetMulticastGroupResponse>}
 *     Promise that resolves to the response
 */
proto.api.MulticastGroupServicePromiseClient.prototype.get =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/api.MulticastGroupService/Get',
      request,
      metadata || {},
      methodDescriptor_MulticastGroupService_Get);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.api.UpdateMulticastGroupRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodDescriptor_MulticastGroupService_Update = new grpc.web.MethodDescriptor(
  '/api.MulticastGroupService/Update',
  grpc.web.MethodType.UNARY,
  proto.api.UpdateMulticastGroupRequest,
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.api.UpdateMulticastGroupRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.api.UpdateMulticastGroupRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.api.MulticastGroupServiceClient.prototype.update =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/api.MulticastGroupService/Update',
      request,
      metadata || {},
      methodDescriptor_MulticastGroupService_Update,
      callback);
};


/**
 * @param {!proto.api.UpdateMulticastGroupRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     Promise that resolves to the response
 */
proto.api.MulticastGroupServicePromiseClient.prototype.update =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/api.MulticastGroupService/Update',
      request,
      metadata || {},
      methodDescriptor_MulticastGroupService_Update);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.api.DeleteMulticastGroupRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodDescriptor_MulticastGroupService_Delete = new grpc.web.MethodDescriptor(
  '/api.MulticastGroupService/Delete',
  grpc.web.MethodType.UNARY,
  proto.api.DeleteMulticastGroupRequest,
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.api.DeleteMulticastGroupRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.api.DeleteMulticastGroupRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.api.MulticastGroupServiceClient.prototype.delete =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/api.MulticastGroupService/Delete',
      request,
      metadata || {},
      methodDescriptor_MulticastGroupService_Delete,
      callback);
};


/**
 * @param {!proto.api.DeleteMulticastGroupRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     Promise that resolves to the response
 */
proto.api.MulticastGroupServicePromiseClient.prototype.delete =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/api.MulticastGroupService/Delete',
      request,
      metadata || {},
      methodDescriptor_MulticastGroupService_Delete);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.api.ListMulticastGroupsRequest,
 *   !proto.api.ListMulticastGroupsResponse>}
 */
const methodDescriptor_MulticastGroupService_List = new grpc.web.MethodDescriptor(
  '/api.MulticastGroupService/List',
  grpc.web.MethodType.UNARY,
  proto.api.ListMulticastGroupsRequest,
  proto.api.ListMulticastGroupsResponse,
  /**
   * @param {!proto.api.ListMulticastGroupsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.api.ListMulticastGroupsResponse.deserializeBinary
);


/**
 * @param {!proto.api.ListMulticastGroupsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.api.ListMulticastGroupsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.api.ListMulticastGroupsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.api.MulticastGroupServiceClient.prototype.list =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/api.MulticastGroupService/List',
      request,
      metadata || {},
      methodDescriptor_MulticastGroupService_List,
      callback);
};


/**
 * @param {!proto.api.ListMulticastGroupsRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.api.ListMulticastGroupsResponse>}
 *     Promise that resolves to the response
 */
proto.api.MulticastGroupServicePromiseClient.prototype.list =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/api.MulticastGroupService/List',
      request,
      metadata || {},
      methodDescriptor_MulticastGroupService_List);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.api.AddDeviceToMulticastGroupRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodDescriptor_MulticastGroupService_AddDevice = new grpc.web.MethodDescriptor(
  '/api.MulticastGroupService/AddDevice',
  grpc.web.MethodType.UNARY,
  proto.api.AddDeviceToMulticastGroupRequest,
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.api.AddDeviceToMulticastGroupRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.api.AddDeviceToMulticastGroupRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.api.MulticastGroupServiceClient.prototype.addDevice =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/api.MulticastGroupService/AddDevice',
      request,
      metadata || {},
      methodDescriptor_MulticastGroupService_AddDevice,
      callback);
};


/**
 * @param {!proto.api.AddDeviceToMulticastGroupRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     Promise that resolves to the response
 */
proto.api.MulticastGroupServicePromiseClient.prototype.addDevice =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/api.MulticastGroupService/AddDevice',
      request,
      metadata || {},
      methodDescriptor_MulticastGroupService_AddDevice);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.api.RemoveDeviceFromMulticastGroupRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodDescriptor_MulticastGroupService_RemoveDevice = new grpc.web.MethodDescriptor(
  '/api.MulticastGroupService/RemoveDevice',
  grpc.web.MethodType.UNARY,
  proto.api.RemoveDeviceFromMulticastGroupRequest,
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.api.RemoveDeviceFromMulticastGroupRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.api.RemoveDeviceFromMulticastGroupRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.api.MulticastGroupServiceClient.prototype.removeDevice =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/api.MulticastGroupService/RemoveDevice',
      request,
      metadata || {},
      methodDescriptor_MulticastGroupService_RemoveDevice,
      callback);
};


/**
 * @param {!proto.api.RemoveDeviceFromMulticastGroupRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     Promise that resolves to the response
 */
proto.api.MulticastGroupServicePromiseClient.prototype.removeDevice =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/api.MulticastGroupService/RemoveDevice',
      request,
      metadata || {},
      methodDescriptor_MulticastGroupService_RemoveDevice);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.api.AddGatewayToMulticastGroupRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodDescriptor_MulticastGroupService_AddGateway = new grpc.web.MethodDescriptor(
  '/api.MulticastGroupService/AddGateway',
  grpc.web.MethodType.UNARY,
  proto.api.AddGatewayToMulticastGroupRequest,
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.api.AddGatewayToMulticastGroupRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.api.AddGatewayToMulticastGroupRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.api.MulticastGroupServiceClient.prototype.addGateway =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/api.MulticastGroupService/AddGateway',
      request,
      metadata || {},
      methodDescriptor_MulticastGroupService_AddGateway,
      callback);
};


/**
 * @param {!proto.api.AddGatewayToMulticastGroupRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     Promise that resolves to the response
 */
proto.api.MulticastGroupServicePromiseClient.prototype.addGateway =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/api.MulticastGroupService/AddGateway',
      request,
      metadata || {},
      methodDescriptor_MulticastGroupService_AddGateway);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.api.RemoveGatewayFromMulticastGroupRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodDescriptor_MulticastGroupService_RemoveGateway = new grpc.web.MethodDescriptor(
  '/api.MulticastGroupService/RemoveGateway',
  grpc.web.MethodType.UNARY,
  proto.api.RemoveGatewayFromMulticastGroupRequest,
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.api.RemoveGatewayFromMulticastGroupRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.api.RemoveGatewayFromMulticastGroupRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.api.MulticastGroupServiceClient.prototype.removeGateway =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/api.MulticastGroupService/RemoveGateway',
      request,
      metadata || {},
      methodDescriptor_MulticastGroupService_RemoveGateway,
      callback);
};


/**
 * @param {!proto.api.RemoveGatewayFromMulticastGroupRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     Promise that resolves to the response
 */
proto.api.MulticastGroupServicePromiseClient.prototype.removeGateway =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/api.MulticastGroupService/RemoveGateway',
      request,
      metadata || {},
      methodDescriptor_MulticastGroupService_RemoveGateway);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.api.EnqueueMulticastGroupQueueItemRequest,
 *   !proto.api.EnqueueMulticastGroupQueueItemResponse>}
 */
const methodDescriptor_MulticastGroupService_Enqueue = new grpc.web.MethodDescriptor(
  '/api.MulticastGroupService/Enqueue',
  grpc.web.MethodType.UNARY,
  proto.api.EnqueueMulticastGroupQueueItemRequest,
  proto.api.EnqueueMulticastGroupQueueItemResponse,
  /**
   * @param {!proto.api.EnqueueMulticastGroupQueueItemRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.api.EnqueueMulticastGroupQueueItemResponse.deserializeBinary
);


/**
 * @param {!proto.api.EnqueueMulticastGroupQueueItemRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.api.EnqueueMulticastGroupQueueItemResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.api.EnqueueMulticastGroupQueueItemResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.api.MulticastGroupServiceClient.prototype.enqueue =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/api.MulticastGroupService/Enqueue',
      request,
      metadata || {},
      methodDescriptor_MulticastGroupService_Enqueue,
      callback);
};


/**
 * @param {!proto.api.EnqueueMulticastGroupQueueItemRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.api.EnqueueMulticastGroupQueueItemResponse>}
 *     Promise that resolves to the response
 */
proto.api.MulticastGroupServicePromiseClient.prototype.enqueue =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/api.MulticastGroupService/Enqueue',
      request,
      metadata || {},
      methodDescriptor_MulticastGroupService_Enqueue);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.api.FlushMulticastGroupQueueRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodDescriptor_MulticastGroupService_FlushQueue = new grpc.web.MethodDescriptor(
  '/api.MulticastGroupService/FlushQueue',
  grpc.web.MethodType.UNARY,
  proto.api.FlushMulticastGroupQueueRequest,
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.api.FlushMulticastGroupQueueRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.api.FlushMulticastGroupQueueRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.api.MulticastGroupServiceClient.prototype.flushQueue =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/api.MulticastGroupService/FlushQueue',
      request,
      metadata || {},
      methodDescriptor_MulticastGroupService_FlushQueue,
      callback);
};


/**
 * @param {!proto.api.FlushMulticastGroupQueueRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     Promise that resolves to the response
 */
proto.api.MulticastGroupServicePromiseClient.prototype.flushQueue =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/api.MulticastGroupService/FlushQueue',
      request,
      metadata || {},
      methodDescriptor_MulticastGroupService_FlushQueue);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.api.ListMulticastGroupQueueRequest,
 *   !proto.api.ListMulticastGroupQueueResponse>}
 */
const methodDescriptor_MulticastGroupService_ListQueue = new grpc.web.MethodDescriptor(
  '/api.MulticastGroupService/ListQueue',
  grpc.web.MethodType.UNARY,
  proto.api.ListMulticastGroupQueueRequest,
  proto.api.ListMulticastGroupQueueResponse,
  /**
   * @param {!proto.api.ListMulticastGroupQueueRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.api.ListMulticastGroupQueueResponse.deserializeBinary
);


/**
 * @param {!proto.api.ListMulticastGroupQueueRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.api.ListMulticastGroupQueueResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.api.ListMulticastGroupQueueResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.api.MulticastGroupServiceClient.prototype.listQueue =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/api.MulticastGroupService/ListQueue',
      request,
      metadata || {},
      methodDescriptor_MulticastGroupService_ListQueue,
      callback);
};


/**
 * @param {!proto.api.ListMulticastGroupQueueRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.api.ListMulticastGroupQueueResponse>}
 *     Promise that resolves to the response
 */
proto.api.MulticastGroupServicePromiseClient.prototype.listQueue =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/api.MulticastGroupService/ListQueue',
      request,
      metadata || {},
      methodDescriptor_MulticastGroupService_ListQueue);
};


module.exports = proto.api;
