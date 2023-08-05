// package: user
// file: user.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class AuthUserRequest extends jspb.Message { 
    getEmail(): string;
    setEmail(value: string): AuthUserRequest;
    getPassword(): string;
    setPassword(value: string): AuthUserRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AuthUserRequest.AsObject;
    static toObject(includeInstance: boolean, msg: AuthUserRequest): AuthUserRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AuthUserRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AuthUserRequest;
    static deserializeBinaryFromReader(message: AuthUserRequest, reader: jspb.BinaryReader): AuthUserRequest;
}

export namespace AuthUserRequest {
    export type AsObject = {
        email: string,
        password: string,
    }
}

export class AuthUserReply extends jspb.Message { 
    getIsuser(): boolean;
    setIsuser(value: boolean): AuthUserReply;

    hasInfo(): boolean;
    clearInfo(): void;
    getInfo(): UserInfo | undefined;
    setInfo(value?: UserInfo): AuthUserReply;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AuthUserReply.AsObject;
    static toObject(includeInstance: boolean, msg: AuthUserReply): AuthUserReply.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AuthUserReply, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AuthUserReply;
    static deserializeBinaryFromReader(message: AuthUserReply, reader: jspb.BinaryReader): AuthUserReply;
}

export namespace AuthUserReply {
    export type AsObject = {
        isuser: boolean,
        info?: UserInfo.AsObject,
    }
}

export class UserInfo extends jspb.Message { 
    getName(): string;
    setName(value: string): UserInfo;
    getEmail(): string;
    setEmail(value: string): UserInfo;
    getRole(): string;
    setRole(value: string): UserInfo;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UserInfo.AsObject;
    static toObject(includeInstance: boolean, msg: UserInfo): UserInfo.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UserInfo, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UserInfo;
    static deserializeBinaryFromReader(message: UserInfo, reader: jspb.BinaryReader): UserInfo;
}

export namespace UserInfo {
    export type AsObject = {
        name: string,
        email: string,
        role: string,
    }
}

export class RegisterRequest extends jspb.Message { 
    getName(): string;
    setName(value: string): RegisterRequest;
    getEmail(): string;
    setEmail(value: string): RegisterRequest;
    getRole(): string;
    setRole(value: string): RegisterRequest;
    getPassword(): string;
    setPassword(value: string): RegisterRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RegisterRequest.AsObject;
    static toObject(includeInstance: boolean, msg: RegisterRequest): RegisterRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RegisterRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RegisterRequest;
    static deserializeBinaryFromReader(message: RegisterRequest, reader: jspb.BinaryReader): RegisterRequest;
}

export namespace RegisterRequest {
    export type AsObject = {
        name: string,
        email: string,
        role: string,
        password: string,
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
