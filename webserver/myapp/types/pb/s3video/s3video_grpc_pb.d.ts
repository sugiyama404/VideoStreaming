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
    videoList: IVideotransporterService_IVideoList;
    videoHomeList: IVideotransporterService_IVideoHomeList;
    videoOne: IVideotransporterService_IVideoOne;
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
interface IVideotransporterService_IVideoDeteilUpload extends grpc.MethodDefinition<s3video_pb.VideoDeteilUpoadRequest, s3video_pb.VideoDeteilUpoadReplay> {
    path: "/s3video.Videotransporter/VideoDeteilUpload";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<s3video_pb.VideoDeteilUpoadRequest>;
    requestDeserialize: grpc.deserialize<s3video_pb.VideoDeteilUpoadRequest>;
    responseSerialize: grpc.serialize<s3video_pb.VideoDeteilUpoadReplay>;
    responseDeserialize: grpc.deserialize<s3video_pb.VideoDeteilUpoadReplay>;
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
interface IVideotransporterService_IVideoList extends grpc.MethodDefinition<s3video_pb.Empty, s3video_pb.VideoListReplay> {
    path: "/s3video.Videotransporter/VideoList";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<s3video_pb.Empty>;
    requestDeserialize: grpc.deserialize<s3video_pb.Empty>;
    responseSerialize: grpc.serialize<s3video_pb.VideoListReplay>;
    responseDeserialize: grpc.deserialize<s3video_pb.VideoListReplay>;
}
interface IVideotransporterService_IVideoHomeList extends grpc.MethodDefinition<s3video_pb.Empty, s3video_pb.VideoHomeListReplay> {
    path: "/s3video.Videotransporter/VideoHomeList";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<s3video_pb.Empty>;
    requestDeserialize: grpc.deserialize<s3video_pb.Empty>;
    responseSerialize: grpc.serialize<s3video_pb.VideoHomeListReplay>;
    responseDeserialize: grpc.deserialize<s3video_pb.VideoHomeListReplay>;
}
interface IVideotransporterService_IVideoOne extends grpc.MethodDefinition<s3video_pb.VideoOneRequest, s3video_pb.VideoOneReplay> {
    path: "/s3video.Videotransporter/VideoOne";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<s3video_pb.VideoOneRequest>;
    requestDeserialize: grpc.deserialize<s3video_pb.VideoOneRequest>;
    responseSerialize: grpc.serialize<s3video_pb.VideoOneReplay>;
    responseDeserialize: grpc.deserialize<s3video_pb.VideoOneReplay>;
}

export const VideotransporterService: IVideotransporterService;

export interface IVideotransporterServer {
    videoUpload: grpc.handleClientStreamingCall<s3video_pb.VideoUpoadRequest, s3video_pb.VideoUploadReplay>;
    videoDeteilUpload: grpc.handleUnaryCall<s3video_pb.VideoDeteilUpoadRequest, s3video_pb.VideoDeteilUpoadReplay>;
    videoDownload: grpc.handleUnaryCall<s3video_pb.VideoDownloadRequest, s3video_pb.VideoDownloadReplay>;
    videoList: grpc.handleUnaryCall<s3video_pb.Empty, s3video_pb.VideoListReplay>;
    videoHomeList: grpc.handleUnaryCall<s3video_pb.Empty, s3video_pb.VideoHomeListReplay>;
    videoOne: grpc.handleUnaryCall<s3video_pb.VideoOneRequest, s3video_pb.VideoOneReplay>;
}

export interface IVideotransporterClient {
    videoUpload(callback: (error: grpc.ServiceError | null, response: s3video_pb.VideoUploadReplay) => void): grpc.ClientWritableStream<s3video_pb.VideoUpoadRequest>;
    videoUpload(metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: s3video_pb.VideoUploadReplay) => void): grpc.ClientWritableStream<s3video_pb.VideoUpoadRequest>;
    videoUpload(options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: s3video_pb.VideoUploadReplay) => void): grpc.ClientWritableStream<s3video_pb.VideoUpoadRequest>;
    videoUpload(metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: s3video_pb.VideoUploadReplay) => void): grpc.ClientWritableStream<s3video_pb.VideoUpoadRequest>;
    videoDeteilUpload(request: s3video_pb.VideoDeteilUpoadRequest, callback: (error: grpc.ServiceError | null, response: s3video_pb.VideoDeteilUpoadReplay) => void): grpc.ClientUnaryCall;
    videoDeteilUpload(request: s3video_pb.VideoDeteilUpoadRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: s3video_pb.VideoDeteilUpoadReplay) => void): grpc.ClientUnaryCall;
    videoDeteilUpload(request: s3video_pb.VideoDeteilUpoadRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: s3video_pb.VideoDeteilUpoadReplay) => void): grpc.ClientUnaryCall;
    videoDownload(request: s3video_pb.VideoDownloadRequest, callback: (error: grpc.ServiceError | null, response: s3video_pb.VideoDownloadReplay) => void): grpc.ClientUnaryCall;
    videoDownload(request: s3video_pb.VideoDownloadRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: s3video_pb.VideoDownloadReplay) => void): grpc.ClientUnaryCall;
    videoDownload(request: s3video_pb.VideoDownloadRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: s3video_pb.VideoDownloadReplay) => void): grpc.ClientUnaryCall;
    videoList(request: s3video_pb.Empty, callback: (error: grpc.ServiceError | null, response: s3video_pb.VideoListReplay) => void): grpc.ClientUnaryCall;
    videoList(request: s3video_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: s3video_pb.VideoListReplay) => void): grpc.ClientUnaryCall;
    videoList(request: s3video_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: s3video_pb.VideoListReplay) => void): grpc.ClientUnaryCall;
    videoHomeList(request: s3video_pb.Empty, callback: (error: grpc.ServiceError | null, response: s3video_pb.VideoHomeListReplay) => void): grpc.ClientUnaryCall;
    videoHomeList(request: s3video_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: s3video_pb.VideoHomeListReplay) => void): grpc.ClientUnaryCall;
    videoHomeList(request: s3video_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: s3video_pb.VideoHomeListReplay) => void): grpc.ClientUnaryCall;
    videoOne(request: s3video_pb.VideoOneRequest, callback: (error: grpc.ServiceError | null, response: s3video_pb.VideoOneReplay) => void): grpc.ClientUnaryCall;
    videoOne(request: s3video_pb.VideoOneRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: s3video_pb.VideoOneReplay) => void): grpc.ClientUnaryCall;
    videoOne(request: s3video_pb.VideoOneRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: s3video_pb.VideoOneReplay) => void): grpc.ClientUnaryCall;
}

export class VideotransporterClient extends grpc.Client implements IVideotransporterClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public videoUpload(callback: (error: grpc.ServiceError | null, response: s3video_pb.VideoUploadReplay) => void): grpc.ClientWritableStream<s3video_pb.VideoUpoadRequest>;
    public videoUpload(metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: s3video_pb.VideoUploadReplay) => void): grpc.ClientWritableStream<s3video_pb.VideoUpoadRequest>;
    public videoUpload(options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: s3video_pb.VideoUploadReplay) => void): grpc.ClientWritableStream<s3video_pb.VideoUpoadRequest>;
    public videoUpload(metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: s3video_pb.VideoUploadReplay) => void): grpc.ClientWritableStream<s3video_pb.VideoUpoadRequest>;
    public videoDeteilUpload(request: s3video_pb.VideoDeteilUpoadRequest, callback: (error: grpc.ServiceError | null, response: s3video_pb.VideoDeteilUpoadReplay) => void): grpc.ClientUnaryCall;
    public videoDeteilUpload(request: s3video_pb.VideoDeteilUpoadRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: s3video_pb.VideoDeteilUpoadReplay) => void): grpc.ClientUnaryCall;
    public videoDeteilUpload(request: s3video_pb.VideoDeteilUpoadRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: s3video_pb.VideoDeteilUpoadReplay) => void): grpc.ClientUnaryCall;
    public videoDownload(request: s3video_pb.VideoDownloadRequest, callback: (error: grpc.ServiceError | null, response: s3video_pb.VideoDownloadReplay) => void): grpc.ClientUnaryCall;
    public videoDownload(request: s3video_pb.VideoDownloadRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: s3video_pb.VideoDownloadReplay) => void): grpc.ClientUnaryCall;
    public videoDownload(request: s3video_pb.VideoDownloadRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: s3video_pb.VideoDownloadReplay) => void): grpc.ClientUnaryCall;
    public videoList(request: s3video_pb.Empty, callback: (error: grpc.ServiceError | null, response: s3video_pb.VideoListReplay) => void): grpc.ClientUnaryCall;
    public videoList(request: s3video_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: s3video_pb.VideoListReplay) => void): grpc.ClientUnaryCall;
    public videoList(request: s3video_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: s3video_pb.VideoListReplay) => void): grpc.ClientUnaryCall;
    public videoHomeList(request: s3video_pb.Empty, callback: (error: grpc.ServiceError | null, response: s3video_pb.VideoHomeListReplay) => void): grpc.ClientUnaryCall;
    public videoHomeList(request: s3video_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: s3video_pb.VideoHomeListReplay) => void): grpc.ClientUnaryCall;
    public videoHomeList(request: s3video_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: s3video_pb.VideoHomeListReplay) => void): grpc.ClientUnaryCall;
    public videoOne(request: s3video_pb.VideoOneRequest, callback: (error: grpc.ServiceError | null, response: s3video_pb.VideoOneReplay) => void): grpc.ClientUnaryCall;
    public videoOne(request: s3video_pb.VideoOneRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: s3video_pb.VideoOneReplay) => void): grpc.ClientUnaryCall;
    public videoOne(request: s3video_pb.VideoOneRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: s3video_pb.VideoOneReplay) => void): grpc.ClientUnaryCall;
}
