// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var s3video_pb = require('./s3video_pb.js');

function serialize_s3video_Message(arg) {
  if (!(arg instanceof s3video_pb.Message)) {
    throw new Error('Expected argument of type s3video.Message');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_s3video_Message(buffer_arg) {
  return s3video_pb.Message.deserializeBinary(new Uint8Array(buffer_arg));
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
    responseType: s3video_pb.Message,
    requestSerialize: serialize_s3video_VideoUpoadRequest,
    requestDeserialize: deserialize_s3video_VideoUpoadRequest,
    responseSerialize: serialize_s3video_Message,
    responseDeserialize: deserialize_s3video_Message,
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
