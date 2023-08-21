// package: s3video
// file: s3video.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as s3video_pb from "./s3video_pb";

interface IVideotransporterService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    videoUpload: IVideotransporterService_IVideoUpload;
    videoDeteilUpload: IVideotransporterService_IVideoDeteilUpload;
    videoDownload: IVideotransporterService_IVideoDownload;
}

interface IVideotransporterService_IVideoUpload extends grpc.MethodDefinition<s3video_pb.VideoUpoadRequest, s3video_pb.VideoUploadReplay> {
    path: "/s3video.Videotransporter/VideoUpload";
    requestStream: true;
    responseStream: false;
    requestSerialize: grpc.serialize<s3video_pb.VideoUpoadRequest>;
    requestDeserialize: grpc.deserialize<s3video_pb.VideoUpoadRequest>;
    responseSerialize: grpc.serialize<s3video_pb.VideoUploadReplay>;
    responseDeserialize: grpc.deserialize<s3video_pb.VideoUploadReplay>;
}
interface IVideotransporterService_IVideoDeteilUpload extends grpc.MethodDefinition<s3video_pb.VideoDeteilUpoadRequest, s3video_pb.Message> {
    path: "/s3video.Videotransporter/VideoDeteilUpload";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<s3video_pb.VideoDeteilUpoadRequest>;
    requestDeserialize: grpc.deserialize<s3video_pb.VideoDeteilUpoadRequest>;
    responseSerialize: grpc.serialize<s3video_pb.Message>;
    responseDeserialize: grpc.deserialize<s3video_pb.Message>;
}
interface IVideotransporterService_IVideoDownload extends grpc.MethodDefinition<s3video_pb.VideoDownloadRequest, s3video_pb.VideoDownloadReplay> {
    path: "/s3video.Videotransporter/VideoDownload";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<s3video_pb.VideoDownloadRequest>;
    requestDeserialize: grpc.deserialize<s3video_pb.VideoDownloadRequest>;
    responseSerialize: grpc.serialize<s3video_pb.VideoDownloadReplay>;
    responseDeserialize: grpc.deserialize<s3video_pb.VideoDownloadReplay>;
}

export const VideotransporterService: IVideotransporterService;

export interface IVideotransporterServer {
    videoUpload: grpc.handleClientStreamingCall<s3video_pb.VideoUpoadRequest, s3video_pb.VideoUploadReplay>;
    videoDeteilUpload: grpc.handleUnaryCall<s3video_pb.VideoDeteilUpoadRequest, s3video_pb.Message>;
    videoDownload: grpc.handleUnaryCall<s3video_pb.VideoDownloadRequest, s3video_pb.VideoDownloadReplay>;
}

export interface IVideotransporterClient {
    videoUpload(callback: (error: grpc.ServiceError | null, response: s3video_pb.VideoUploadReplay) => void): grpc.ClientWritableStream<s3video_pb.VideoUpoadRequest>;
    videoUpload(metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: s3video_pb.VideoUploadReplay) => void): grpc.ClientWritableStream<s3video_pb.VideoUpoadRequest>;
    videoUpload(options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: s3video_pb.VideoUploadReplay) => void): grpc.ClientWritableStream<s3video_pb.VideoUpoadRequest>;
    videoUpload(metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: s3video_pb.VideoUploadReplay) => void): grpc.ClientWritableStream<s3video_pb.VideoUpoadRequest>;
    videoDeteilUpload(request: s3video_pb.VideoDeteilUpoadRequest, callback: (error: grpc.ServiceError | null, response: s3video_pb.Message) => void): grpc.ClientUnaryCall;
    videoDeteilUpload(request: s3video_pb.VideoDeteilUpoadRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: s3video_pb.Message) => void): grpc.ClientUnaryCall;
    videoDeteilUpload(request: s3video_pb.VideoDeteilUpoadRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: s3video_pb.Message) => void): grpc.ClientUnaryCall;
    videoDownload(request: s3video_pb.VideoDownloadRequest, callback: (error: grpc.ServiceError | null, response: s3video_pb.VideoDownloadReplay) => void): grpc.ClientUnaryCall;
    videoDownload(request: s3video_pb.VideoDownloadRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: s3video_pb.VideoDownloadReplay) => void): grpc.ClientUnaryCall;
    videoDownload(request: s3video_pb.VideoDownloadRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: s3video_pb.VideoDownloadReplay) => void): grpc.ClientUnaryCall;
}

export class VideotransporterClient extends grpc.Client implements IVideotransporterClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public videoUpload(callback: (error: grpc.ServiceError | null, response: s3video_pb.VideoUploadReplay) => void): grpc.ClientWritableStream<s3video_pb.VideoUpoadRequest>;
    public videoUpload(metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: s3video_pb.VideoUploadReplay) => void): grpc.ClientWritableStream<s3video_pb.VideoUpoadRequest>;
    public videoUpload(options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: s3video_pb.VideoUploadReplay) => void): grpc.ClientWritableStream<s3video_pb.VideoUpoadRequest>;
    public videoUpload(metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: s3video_pb.VideoUploadReplay) => void): grpc.ClientWritableStream<s3video_pb.VideoUpoadRequest>;
    public videoDeteilUpload(request: s3video_pb.VideoDeteilUpoadRequest, callback: (error: grpc.ServiceError | null, response: s3video_pb.Message) => void): grpc.ClientUnaryCall;
    public videoDeteilUpload(request: s3video_pb.VideoDeteilUpoadRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: s3video_pb.Message) => void): grpc.ClientUnaryCall;
    public videoDeteilUpload(request: s3video_pb.VideoDeteilUpoadRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: s3video_pb.Message) => void): grpc.ClientUnaryCall;
    public videoDownload(request: s3video_pb.VideoDownloadRequest, callback: (error: grpc.ServiceError | null, response: s3video_pb.VideoDownloadReplay) => void): grpc.ClientUnaryCall;
    public videoDownload(request: s3video_pb.VideoDownloadRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: s3video_pb.VideoDownloadReplay) => void): grpc.ClientUnaryCall;
    public videoDownload(request: s3video_pb.VideoDownloadRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: s3video_pb.VideoDownloadReplay) => void): grpc.ClientUnaryCall;
}
