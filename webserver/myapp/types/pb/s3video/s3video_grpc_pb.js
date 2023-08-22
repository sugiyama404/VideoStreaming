// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var s3video_pb = require('./s3video_pb.js');

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
};

exports.VideotransporterClient = grpc.makeGenericClientConstructor(VideotransporterService);
