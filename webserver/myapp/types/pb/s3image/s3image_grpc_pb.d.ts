// package: s3image
// file: s3image.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as s3image_pb from "./s3image_pb";

interface IImagetransporterService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    imageUpload: IImagetransporterService_IImageUpload;
    imageStreamUpload: IImagetransporterService_IImageStreamUpload;
    imageDownload: IImagetransporterService_IImageDownload;
}

interface IImagetransporterService_IImageUpload extends grpc.MethodDefinition<s3image_pb.ImageUpoadRequest, s3image_pb.Message> {
    path: "/s3image.Imagetransporter/ImageUpload";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<s3image_pb.ImageUpoadRequest>;
    requestDeserialize: grpc.deserialize<s3image_pb.ImageUpoadRequest>;
    responseSerialize: grpc.serialize<s3image_pb.Message>;
    responseDeserialize: grpc.deserialize<s3image_pb.Message>;
}
interface IImagetransporterService_IImageStreamUpload extends grpc.MethodDefinition<s3image_pb.ImageUpoadRequest, s3image_pb.Message> {
    path: "/s3image.Imagetransporter/ImageStreamUpload";
    requestStream: true;
    responseStream: false;
    requestSerialize: grpc.serialize<s3image_pb.ImageUpoadRequest>;
    requestDeserialize: grpc.deserialize<s3image_pb.ImageUpoadRequest>;
    responseSerialize: grpc.serialize<s3image_pb.Message>;
    responseDeserialize: grpc.deserialize<s3image_pb.Message>;
}
interface IImagetransporterService_IImageDownload extends grpc.MethodDefinition<s3image_pb.ImageDownloadRequest, s3image_pb.ImageDownloadResponse> {
    path: "/s3image.Imagetransporter/ImageDownload";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<s3image_pb.ImageDownloadRequest>;
    requestDeserialize: grpc.deserialize<s3image_pb.ImageDownloadRequest>;
    responseSerialize: grpc.serialize<s3image_pb.ImageDownloadResponse>;
    responseDeserialize: grpc.deserialize<s3image_pb.ImageDownloadResponse>;
}

export const ImagetransporterService: IImagetransporterService;

export interface IImagetransporterServer {
    imageUpload: grpc.handleUnaryCall<s3image_pb.ImageUpoadRequest, s3image_pb.Message>;
    imageStreamUpload: grpc.handleClientStreamingCall<s3image_pb.ImageUpoadRequest, s3image_pb.Message>;
    imageDownload: grpc.handleUnaryCall<s3image_pb.ImageDownloadRequest, s3image_pb.ImageDownloadResponse>;
}

export interface IImagetransporterClient {
    imageUpload(request: s3image_pb.ImageUpoadRequest, callback: (error: grpc.ServiceError | null, response: s3image_pb.Message) => void): grpc.ClientUnaryCall;
    imageUpload(request: s3image_pb.ImageUpoadRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: s3image_pb.Message) => void): grpc.ClientUnaryCall;
    imageUpload(request: s3image_pb.ImageUpoadRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: s3image_pb.Message) => void): grpc.ClientUnaryCall;
    imageStreamUpload(callback: (error: grpc.ServiceError | null, response: s3image_pb.Message) => void): grpc.ClientWritableStream<s3image_pb.ImageUpoadRequest>;
    imageStreamUpload(metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: s3image_pb.Message) => void): grpc.ClientWritableStream<s3image_pb.ImageUpoadRequest>;
    imageStreamUpload(options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: s3image_pb.Message) => void): grpc.ClientWritableStream<s3image_pb.ImageUpoadRequest>;
    imageStreamUpload(metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: s3image_pb.Message) => void): grpc.ClientWritableStream<s3image_pb.ImageUpoadRequest>;
    imageDownload(request: s3image_pb.ImageDownloadRequest, callback: (error: grpc.ServiceError | null, response: s3image_pb.ImageDownloadResponse) => void): grpc.ClientUnaryCall;
    imageDownload(request: s3image_pb.ImageDownloadRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: s3image_pb.ImageDownloadResponse) => void): grpc.ClientUnaryCall;
    imageDownload(request: s3image_pb.ImageDownloadRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: s3image_pb.ImageDownloadResponse) => void): grpc.ClientUnaryCall;
}

export class ImagetransporterClient extends grpc.Client implements IImagetransporterClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public imageUpload(request: s3image_pb.ImageUpoadRequest, callback: (error: grpc.ServiceError | null, response: s3image_pb.Message) => void): grpc.ClientUnaryCall;
    public imageUpload(request: s3image_pb.ImageUpoadRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: s3image_pb.Message) => void): grpc.ClientUnaryCall;
    public imageUpload(request: s3image_pb.ImageUpoadRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: s3image_pb.Message) => void): grpc.ClientUnaryCall;
    public imageStreamUpload(callback: (error: grpc.ServiceError | null, response: s3image_pb.Message) => void): grpc.ClientWritableStream<s3image_pb.ImageUpoadRequest>;
    public imageStreamUpload(metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: s3image_pb.Message) => void): grpc.ClientWritableStream<s3image_pb.ImageUpoadRequest>;
    public imageStreamUpload(options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: s3image_pb.Message) => void): grpc.ClientWritableStream<s3image_pb.ImageUpoadRequest>;
    public imageStreamUpload(metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: s3image_pb.Message) => void): grpc.ClientWritableStream<s3image_pb.ImageUpoadRequest>;
    public imageDownload(request: s3image_pb.ImageDownloadRequest, callback: (error: grpc.ServiceError | null, response: s3image_pb.ImageDownloadResponse) => void): grpc.ClientUnaryCall;
    public imageDownload(request: s3image_pb.ImageDownloadRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: s3image_pb.ImageDownloadResponse) => void): grpc.ClientUnaryCall;
    public imageDownload(request: s3image_pb.ImageDownloadRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: s3image_pb.ImageDownloadResponse) => void): grpc.ClientUnaryCall;
}
