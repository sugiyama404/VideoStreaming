// package: user
// file: user.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as user_pb from "./user_pb";

interface IProfileService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    authUser: IProfileService_IAuthUser;
    registerUser: IProfileService_IRegisterUser;
}

interface IProfileService_IAuthUser extends grpc.MethodDefinition<user_pb.AuthUserRequest, user_pb.AuthUserReply> {
    path: "/user.Profile/AuthUser";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<user_pb.AuthUserRequest>;
    requestDeserialize: grpc.deserialize<user_pb.AuthUserRequest>;
    responseSerialize: grpc.serialize<user_pb.AuthUserReply>;
    responseDeserialize: grpc.deserialize<user_pb.AuthUserReply>;
}
interface IProfileService_IRegisterUser extends grpc.MethodDefinition<user_pb.RegisterRequest, user_pb.Message> {
    path: "/user.Profile/RegisterUser";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<user_pb.RegisterRequest>;
    requestDeserialize: grpc.deserialize<user_pb.RegisterRequest>;
    responseSerialize: grpc.serialize<user_pb.Message>;
    responseDeserialize: grpc.deserialize<user_pb.Message>;
}

export const ProfileService: IProfileService;

export interface IProfileServer {
    authUser: grpc.handleUnaryCall<user_pb.AuthUserRequest, user_pb.AuthUserReply>;
    registerUser: grpc.handleUnaryCall<user_pb.RegisterRequest, user_pb.Message>;
}

export interface IProfileClient {
    authUser(request: user_pb.AuthUserRequest, callback: (error: grpc.ServiceError | null, response: user_pb.AuthUserReply) => void): grpc.ClientUnaryCall;
    authUser(request: user_pb.AuthUserRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: user_pb.AuthUserReply) => void): grpc.ClientUnaryCall;
    authUser(request: user_pb.AuthUserRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: user_pb.AuthUserReply) => void): grpc.ClientUnaryCall;
    registerUser(request: user_pb.RegisterRequest, callback: (error: grpc.ServiceError | null, response: user_pb.Message) => void): grpc.ClientUnaryCall;
    registerUser(request: user_pb.RegisterRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: user_pb.Message) => void): grpc.ClientUnaryCall;
    registerUser(request: user_pb.RegisterRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: user_pb.Message) => void): grpc.ClientUnaryCall;
}

export class ProfileClient extends grpc.Client implements IProfileClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public authUser(request: user_pb.AuthUserRequest, callback: (error: grpc.ServiceError | null, response: user_pb.AuthUserReply) => void): grpc.ClientUnaryCall;
    public authUser(request: user_pb.AuthUserRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: user_pb.AuthUserReply) => void): grpc.ClientUnaryCall;
    public authUser(request: user_pb.AuthUserRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: user_pb.AuthUserReply) => void): grpc.ClientUnaryCall;
    public registerUser(request: user_pb.RegisterRequest, callback: (error: grpc.ServiceError | null, response: user_pb.Message) => void): grpc.ClientUnaryCall;
    public registerUser(request: user_pb.RegisterRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: user_pb.Message) => void): grpc.ClientUnaryCall;
    public registerUser(request: user_pb.RegisterRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: user_pb.Message) => void): grpc.ClientUnaryCall;
}
