// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var s3video_pb = require('./s3video_pb.js');

function serialize_s3video_Empty(arg) {
  if (!(arg instanceof s3video_pb.Empty)) {
    throw new Error('Expected argument of type s3video.Empty');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_s3video_Empty(buffer_arg) {
  return s3video_pb.Empty.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_s3video_VideoDeteilUpoadReplay(arg) {
  if (!(arg instanceof s3video_pb.VideoDeteilUpoadReplay)) {
    throw new Error('Expected argument of type s3video.VideoDeteilUpoadReplay');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_s3video_VideoDeteilUpoadReplay(buffer_arg) {
  return s3video_pb.VideoDeteilUpoadReplay.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_s3video_VideoDeteilUpoadRequest(arg) {
  if (!(arg instanceof s3video_pb.VideoDeteilUpoadRequest)) {
    throw new Error('Expected argument of type s3video.VideoDeteilUpoadRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_s3video_VideoDeteilUpoadRequest(buffer_arg) {
  return s3video_pb.VideoDeteilUpoadRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_s3video_VideoDownloadReplay(arg) {
  if (!(arg instanceof s3video_pb.VideoDownloadReplay)) {
    throw new Error('Expected argument of type s3video.VideoDownloadReplay');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_s3video_VideoDownloadReplay(buffer_arg) {
  return s3video_pb.VideoDownloadReplay.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_s3video_VideoDownloadRequest(arg) {
  if (!(arg instanceof s3video_pb.VideoDownloadRequest)) {
    throw new Error('Expected argument of type s3video.VideoDownloadRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_s3video_VideoDownloadRequest(buffer_arg) {
  return s3video_pb.VideoDownloadRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_s3video_VideoHomeListReplay(arg) {
  if (!(arg instanceof s3video_pb.VideoHomeListReplay)) {
    throw new Error('Expected argument of type s3video.VideoHomeListReplay');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_s3video_VideoHomeListReplay(buffer_arg) {
  return s3video_pb.VideoHomeListReplay.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_s3video_VideoListReplay(arg) {
  if (!(arg instanceof s3video_pb.VideoListReplay)) {
    throw new Error('Expected argument of type s3video.VideoListReplay');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_s3video_VideoListReplay(buffer_arg) {
  return s3video_pb.VideoListReplay.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_s3video_VideoOneReplay(arg) {
  if (!(arg instanceof s3video_pb.VideoOneReplay)) {
    throw new Error('Expected argument of type s3video.VideoOneReplay');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_s3video_VideoOneReplay(buffer_arg) {
  return s3video_pb.VideoOneReplay.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_s3video_VideoOneRequest(arg) {
  if (!(arg instanceof s3video_pb.VideoOneRequest)) {
    throw new Error('Expected argument of type s3video.VideoOneRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_s3video_VideoOneRequest(buffer_arg) {
  return s3video_pb.VideoOneRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_s3video_VideoUploadReplay(arg) {
  if (!(arg instanceof s3video_pb.VideoUploadReplay)) {
    throw new Error('Expected argument of type s3video.VideoUploadReplay');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_s3video_VideoUploadReplay(buffer_arg) {
  return s3video_pb.VideoUploadReplay.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_s3video_VideoUpoadRequest(arg) {
  if (!(arg instanceof s3video_pb.VideoUpoadRequest)) {
    throw new Error('Expected argument of type s3video.VideoUpoadRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_s3video_VideoUpoadRequest(buffer_arg) {
  return s3video_pb.VideoUpoadRequest.deserializeBinary(new Uint8Array(buffer_arg));
}


var VideotransporterService = exports.VideotransporterService = {
  videoUpload: {
    path: '/s3video.Videotransporter/VideoUpload',
    requestStream: true,
    responseStream: false,
    requestType: s3video_pb.VideoUpoadRequest,
    responseType: s3video_pb.VideoUploadReplay,
    requestSerialize: serialize_s3video_VideoUpoadRequest,
    requestDeserialize: deserialize_s3video_VideoUpoadRequest,
    responseSerialize: serialize_s3video_VideoUploadReplay,
    responseDeserialize: deserialize_s3video_VideoUploadReplay,
  },
  videoDeteilUpload: {
    path: '/s3video.Videotransporter/VideoDeteilUpload',
    requestStream: false,
    responseStream: false,
    requestType: s3video_pb.VideoDeteilUpoadRequest,
    responseType: s3video_pb.VideoDeteilUpoadReplay,
    requestSerialize: serialize_s3video_VideoDeteilUpoadRequest,
    requestDeserialize: deserialize_s3video_VideoDeteilUpoadRequest,
    responseSerialize: serialize_s3video_VideoDeteilUpoadReplay,
    responseDeserialize: deserialize_s3video_VideoDeteilUpoadReplay,
  },
  videoDownload: {
    path: '/s3video.Videotransporter/VideoDownload',
    requestStream: false,
    responseStream: false,
    requestType: s3video_pb.VideoDownloadRequest,
    responseType: s3video_pb.VideoDownloadReplay,
    requestSerialize: serialize_s3video_VideoDownloadRequest,
    requestDeserialize: deserialize_s3video_VideoDownloadRequest,
    responseSerialize: serialize_s3video_VideoDownloadReplay,
    responseDeserialize: deserialize_s3video_VideoDownloadReplay,
  },
  videoList: {
    path: '/s3video.Videotransporter/VideoList',
    requestStream: false,
    responseStream: false,
    requestType: s3video_pb.Empty,
    responseType: s3video_pb.VideoListReplay,
    requestSerialize: serialize_s3video_Empty,
    requestDeserialize: deserialize_s3video_Empty,
    responseSerialize: serialize_s3video_VideoListReplay,
    responseDeserialize: deserialize_s3video_VideoListReplay,
  },
  videoHomeList: {
    path: '/s3video.Videotransporter/VideoHomeList',
    requestStream: false,
    responseStream: false,
    requestType: s3video_pb.Empty,
    responseType: s3video_pb.VideoHomeListReplay,
    requestSerialize: serialize_s3video_Empty,
    requestDeserialize: deserialize_s3video_Empty,
    responseSerialize: serialize_s3video_VideoHomeListReplay,
    responseDeserialize: deserialize_s3video_VideoHomeListReplay,
  },
  videoOne: {
    path: '/s3video.Videotransporter/VideoOne',
    requestStream: false,
    responseStream: false,
    requestType: s3video_pb.VideoOneRequest,
    responseType: s3video_pb.VideoOneReplay,
    requestSerialize: serialize_s3video_VideoOneRequest,
    requestDeserialize: deserialize_s3video_VideoOneRequest,
    responseSerialize: serialize_s3video_VideoOneReplay,
    responseDeserialize: deserialize_s3video_VideoOneReplay,
  },
};

exports.VideotransporterClient = grpc.makeGenericClientConstructor(VideotransporterService);
