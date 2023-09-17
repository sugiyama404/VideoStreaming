//@ts-ignore
import { NextResponse, NextRequest } from 'next/server'
//@ts-ignore
import * as grpc from '@grpc/grpc-js';
import { ImagetransporterClient } from '@/types/pb/s3image/s3image_grpc_pb';
import { ImageUpoadRequest, Message } from '@/types/pb/s3image/s3image_pb';
//@ts-ignore
const target: string = process.env.APSERVER_ADDRESS;

export async function POST(request: NextRequest) {
    const client = new ImagetransporterClient(target, grpc.credentials.createInsecure());
    const req = new ImageUpoadRequest();
    const data1 = await request.formData();
    const file: File = await data1.get('file') as File
    const name: string = await data1.get('name') as string

    if (!!name) req.setName(name);
    const blob = new Blob([file], { type: file.type })
    const fileAsByteArray = await blobToUint8Array(blob);
    if (!!fileAsByteArray) req.setImage(fileAsByteArray);
    const res = await new Promise<Message>((resolve, reject) => {
        client.imageUpload(req, (err, res) => {
            if (err) reject(err);
            resolve(res);
        });
    });
    return NextResponse.json({ message: res.getMessage() })
}

async function blobToUint8Array(blob: Blob): Promise<Uint8Array> {
    const arrayBuffer = await blob.arrayBuffer();
    return new Uint8Array(arrayBuffer);
}
