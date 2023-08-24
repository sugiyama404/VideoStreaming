//@ts-ignore
import { NextResponse, NextRequest } from 'next/server'
//@ts-ignore
import * as grpc from '@grpc/grpc-js';
import { ImagetransporterClient } from '@/types/pb/s3image/s3image_grpc_pb';
import { ImageUpoadRequest, Message } from '@/types/pb/s3image/s3image_pb';
import FormOption from "@/types/constants/constants";
const CHUNK_SIZE = FormOption.CHUNK_SIZE;
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

    const chunks: Uint8Array[] = [];
    for (let i = 0; i < fileAsByteArray.length; i += CHUNK_SIZE) {
        if (i + CHUNK_SIZE > fileAsByteArray.length) {
            chunks.push(fileAsByteArray.slice(i, fileAsByteArray.length));
        } else {
            chunks.push(fileAsByteArray.slice(i, i + CHUNK_SIZE));
        }
    }

    const res = await new Promise<Message>((resolve, reject) => {
        const call = client.imageStreamUpload(function (err: any, res: any) {
            if (err) {
                reject(err);
            }
            console.log(res.array[0]);
            resolve(res.array[0]);
        });
        chunks.forEach((chunk: Uint8Array) => {
            const req = new ImageUpoadRequest();
            if (!!name) req.setName(name);
            if (!!chunk) req.setImage(chunk);
            call.write(req);
        });
        call.end();
    });
    return NextResponse.json({ message: res })
}

async function blobToUint8Array(blob: Blob): Promise<Uint8Array> {
    const arrayBuffer = await blob.arrayBuffer();
    return new Uint8Array(arrayBuffer);
}
