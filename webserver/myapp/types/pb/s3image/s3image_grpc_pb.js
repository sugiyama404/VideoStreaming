// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var s3image_pb = require('./s3image_pb.js');

function serialize_s3image_ImageDownloadReplay(arg) {
  if (!(arg instanceof s3image_pb.ImageDownloadReplay)) {
    throw new Error('Expected argument of type s3image.ImageDownloadReplay');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_s3image_ImageDownloadReplay(buffer_arg) {
  return s3image_pb.ImageDownloadReplay.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_s3image_ImageDownloadRequest(arg) {
  if (!(arg instanceof s3image_pb.ImageDownloadRequest)) {
    throw new Error('Expected argument of type s3image.ImageDownloadRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_s3image_ImageDownloadRequest(buffer_arg) {
  return s3image_pb.ImageDownloadRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_s3image_ImageUpoadRequest(arg) {
  if (!(arg instanceof s3image_pb.ImageUpoadRequest)) {
    throw new Error('Expected argument of type s3image.ImageUpoadRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_s3image_ImageUpoadRequest(buffer_arg) {
  return s3image_pb.ImageUpoadRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_s3image_Message(arg) {
  if (!(arg instanceof s3image_pb.Message)) {
    throw new Error('Expected argument of type s3image.Message');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_s3image_Message(buffer_arg) {
  return s3image_pb.Message.deserializeBinary(new Uint8Array(buffer_arg));
}


var ImagetransporterService = exports.ImagetransporterService = {
  imageUpload: {
    path: '/s3image.Imagetransporter/ImageUpload',
    requestStream: false,
    responseStream: false,
    requestType: s3image_pb.ImageUpoadRequest,
    responseType: s3image_pb.Message,
    requestSerialize: serialize_s3image_ImageUpoadRequest,
    requestDeserialize: deserialize_s3image_ImageUpoadRequest,
    responseSerialize: serialize_s3image_Message,
    responseDeserialize: deserialize_s3image_Message,
  },
  imageStreamUpload: {
    path: '/s3image.Imagetransporter/ImageStreamUpload',
    requestStream: true,
    responseStream: false,
    requestType: s3image_pb.ImageUpoadRequest,
    responseType: s3image_pb.Message,
    requestSerialize: serialize_s3image_ImageUpoadRequest,
    requestDeserialize: deserialize_s3image_ImageUpoadRequest,
    responseSerialize: serialize_s3image_Message,
    responseDeserialize: deserialize_s3image_Message,
  },
  imageDownload: {
    path: '/s3image.Imagetransporter/ImageDownload',
    requestStream: false,
    responseStream: false,
    requestType: s3image_pb.ImageDownloadRequest,
    responseType: s3image_pb.ImageDownloadReplay,
    requestSerialize: serialize_s3image_ImageDownloadRequest,
    requestDeserialize: deserialize_s3image_ImageDownloadRequest,
    responseSerialize: serialize_s3image_ImageDownloadReplay,
    responseDeserialize: deserialize_s3image_ImageDownloadReplay,
  },
};

exports.ImagetransporterClient = grpc.makeGenericClientConstructor(ImagetransporterService);
