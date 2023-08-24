// package: s3video
// file: s3video.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class VideoUpoadRequest extends jspb.Message { 
    getData(): Uint8Array | string;
    getData_asU8(): Uint8Array;
    getData_asB64(): string;
    setData(value: Uint8Array | string): VideoUpoadRequest;
    getSize(): number;
    setSize(value: number): VideoUpoadRequest;
    getId(): number;
    setId(value: number): VideoUpoadRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): VideoUpoadRequest.AsObject;
    static toObject(includeInstance: boolean, msg: VideoUpoadRequest): VideoUpoadRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: VideoUpoadRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): VideoUpoadRequest;
    static deserializeBinaryFromReader(message: VideoUpoadRequest, reader: jspb.BinaryReader): VideoUpoadRequest;
}

export namespace VideoUpoadRequest {
    export type AsObject = {
        data: Uint8Array | string,
        size: number,
        id: number,
    }
}

export class VideoUploadReplay extends jspb.Message { 
    getNewname(): string;
    setNewname(value: string): VideoUploadReplay;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): VideoUploadReplay.AsObject;
    static toObject(includeInstance: boolean, msg: VideoUploadReplay): VideoUploadReplay.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: VideoUploadReplay, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): VideoUploadReplay;
    static deserializeBinaryFromReader(message: VideoUploadReplay, reader: jspb.BinaryReader): VideoUploadReplay;
}

export namespace VideoUploadReplay {
    export type AsObject = {
        newname: string,
    }
}

export class VideoDeteilUpoadRequest extends jspb.Message { 
    getVideoUuid(): string;
    setVideoUuid(value: string): VideoDeteilUpoadRequest;
    getTitle(): string;
    setTitle(value: string): VideoDeteilUpoadRequest;
    getExplain(): string;
    setExplain(value: string): VideoDeteilUpoadRequest;
    clearTagsList(): void;
    getTagsList(): Array<string>;
    setTagsList(value: Array<string>): VideoDeteilUpoadRequest;
    addTags(value: string, index?: number): string;
    getCategory(): string;
    setCategory(value: string): VideoDeteilUpoadRequest;
    getExtension$(): string;
    setExtension$(value: string): VideoDeteilUpoadRequest;
    getOversize(): boolean;
    setOversize(value: boolean): VideoDeteilUpoadRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): VideoDeteilUpoadRequest.AsObject;
    static toObject(includeInstance: boolean, msg: VideoDeteilUpoadRequest): VideoDeteilUpoadRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: VideoDeteilUpoadRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): VideoDeteilUpoadRequest;
    static deserializeBinaryFromReader(message: VideoDeteilUpoadRequest, reader: jspb.BinaryReader): VideoDeteilUpoadRequest;
}

export namespace VideoDeteilUpoadRequest {
    export type AsObject = {
        videoUuid: string,
        title: string,
        explain: string,
        tagsList: Array<string>,
        category: string,
        extension: string,
        oversize: boolean,
    }
}

export class VideoDeteilUpoadReplay extends jspb.Message { 
    getUuid(): string;
    setUuid(value: string): VideoDeteilUpoadReplay;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): VideoDeteilUpoadReplay.AsObject;
    static toObject(includeInstance: boolean, msg: VideoDeteilUpoadReplay): VideoDeteilUpoadReplay.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: VideoDeteilUpoadReplay, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): VideoDeteilUpoadReplay;
    static deserializeBinaryFromReader(message: VideoDeteilUpoadReplay, reader: jspb.BinaryReader): VideoDeteilUpoadReplay;
}

export namespace VideoDeteilUpoadReplay {
    export type AsObject = {
        uuid: string,
    }
}

export class VideoDownloadRequest extends jspb.Message { 
    getName(): string;
    setName(value: string): VideoDownloadRequest;
    getStartbytes(): number;
    setStartbytes(value: number): VideoDownloadRequest;
    getEndbytes(): number;
    setEndbytes(value: number): VideoDownloadRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): VideoDownloadRequest.AsObject;
    static toObject(includeInstance: boolean, msg: VideoDownloadRequest): VideoDownloadRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: VideoDownloadRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): VideoDownloadRequest;
    static deserializeBinaryFromReader(message: VideoDownloadRequest, reader: jspb.BinaryReader): VideoDownloadRequest;
}

export namespace VideoDownloadRequest {
    export type AsObject = {
        name: string,
        startbytes: number,
        endbytes: number,
    }
}

export class VideoDownloadReplay extends jspb.Message { 
    getData(): Uint8Array | string;
    getData_asU8(): Uint8Array;
    getData_asB64(): string;
    setData(value: Uint8Array | string): VideoDownloadReplay;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): VideoDownloadReplay.AsObject;
    static toObject(includeInstance: boolean, msg: VideoDownloadReplay): VideoDownloadReplay.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: VideoDownloadReplay, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): VideoDownloadReplay;
    static deserializeBinaryFromReader(message: VideoDownloadReplay, reader: jspb.BinaryReader): VideoDownloadReplay;
}

export namespace VideoDownloadReplay {
    export type AsObject = {
        data: Uint8Array | string,
    }
}
