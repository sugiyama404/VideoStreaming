// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var user_pb = require('./user_pb.js');

function serialize_user_AuthUserReply(arg) {
  if (!(arg instanceof user_pb.AuthUserReply)) {
    throw new Error('Expected argument of type user.AuthUserReply');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_user_AuthUserReply(buffer_arg) {
  return user_pb.AuthUserReply.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_user_AuthUserRequest(arg) {
  if (!(arg instanceof user_pb.AuthUserRequest)) {
    throw new Error('Expected argument of type user.AuthUserRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_user_AuthUserRequest(buffer_arg) {
  return user_pb.AuthUserRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_user_Message(arg) {
  if (!(arg instanceof user_pb.Message)) {
    throw new Error('Expected argument of type user.Message');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_user_Message(buffer_arg) {
  return user_pb.Message.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_user_RegisterRequest(arg) {
  if (!(arg instanceof user_pb.RegisterRequest)) {
    throw new Error('Expected argument of type user.RegisterRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_user_RegisterRequest(buffer_arg) {
  return user_pb.RegisterRequest.deserializeBinary(new Uint8Array(buffer_arg));
}


var ProfileService = exports.ProfileService = {
  authUser: {
    path: '/user.Profile/AuthUser',
    requestStream: false,
    responseStream: false,
    requestType: user_pb.AuthUserRequest,
    responseType: user_pb.AuthUserReply,
    requestSerialize: serialize_user_AuthUserRequest,
    requestDeserialize: deserialize_user_AuthUserRequest,
    responseSerialize: serialize_user_AuthUserReply,
    responseDeserialize: deserialize_user_AuthUserReply,
  },
  registerUser: {
    path: '/user.Profile/RegisterUser',
    requestStream: false,
    responseStream: false,
    requestType: user_pb.RegisterRequest,
    responseType: user_pb.Message,
    requestSerialize: serialize_user_RegisterRequest,
    requestDeserialize: deserialize_user_RegisterRequest,
    responseSerialize: serialize_user_Message,
    responseDeserialize: deserialize_user_Message,
  },
};

exports.ProfileClient = grpc.makeGenericClientConstructor(ProfileService);
