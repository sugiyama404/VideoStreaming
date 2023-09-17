// package: s3image
// file: s3image.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class ImageUpoadRequest extends jspb.Message { 
    getImage(): Uint8Array | string;
    getImage_asU8(): Uint8Array;
    getImage_asB64(): string;
    setImage(value: Uint8Array | string): ImageUpoadRequest;
    getName(): string;
    setName(value: string): ImageUpoadRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ImageUpoadRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ImageUpoadRequest): ImageUpoadRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ImageUpoadRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ImageUpoadRequest;
    static deserializeBinaryFromReader(message: ImageUpoadRequest, reader: jspb.BinaryReader): ImageUpoadRequest;
}

export namespace ImageUpoadRequest {
    export type AsObject = {
        image: Uint8Array | string,
        name: string,
    }
}

export class Message extends jspb.Message { 
    getMessage(): string;
    setMessage(value: string): Message;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Message.AsObject;
    static toObject(includeInstance: boolean, msg: Message): Message.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Message, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Message;
    static deserializeBinaryFromReader(message: Message, reader: jspb.BinaryReader): Message;
}

export namespace Message {
    export type AsObject = {
        message: string,
    }
}

export class ImageDownloadRequest extends jspb.Message { 
    getName(): string;
    setName(value: string): ImageDownloadRequest;
    getIsresize(): boolean;
    setIsresize(value: boolean): ImageDownloadRequest;
    getRewidth(): number;
    setRewidth(value: number): ImageDownloadRequest;
    getReheight(): number;
    setReheight(value: number): ImageDownloadRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ImageDownloadRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ImageDownloadRequest): ImageDownloadRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ImageDownloadRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ImageDownloadRequest;
    static deserializeBinaryFromReader(message: ImageDownloadRequest, reader: jspb.BinaryReader): ImageDownloadRequest;
}

export namespace ImageDownloadRequest {
    export type AsObject = {
        name: string,
        isresize: boolean,
        rewidth: number,
        reheight: number,
    }
}

export class ImageDownloadReplay extends jspb.Message { 
    getImage(): Uint8Array | string;
    getImage_asU8(): Uint8Array;
    getImage_asB64(): string;
    setImage(value: Uint8Array | string): ImageDownloadReplay;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ImageDownloadReplay.AsObject;
    static toObject(includeInstance: boolean, msg: ImageDownloadReplay): ImageDownloadReplay.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ImageDownloadReplay, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ImageDownloadReplay;
    static deserializeBinaryFromReader(message: ImageDownloadReplay, reader: jspb.BinaryReader): ImageDownloadReplay;
}

export namespace ImageDownloadReplay {
    export type AsObject = {
        image: Uint8Array | string,
    }
}
