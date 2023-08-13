'use server'
//@ts-ignore
import { redirect } from 'next/navigation'
//@ts-ignore
import * as grpc from '@grpc/grpc-js';

import { VideotransporterClient } from '@/types/pb/s3video/s3video_grpc_pb';
import { VideoUpoadRequest } from '@/types/pb/s3video/s3video_pb';
const CHUNK_SIZE = 10 ** 6;
//@ts-ignore
const target: string = 'apserver:8080';

export async function create(form: FormData) {
    const client = new VideotransporterClient(target, grpc.credentials.createInsecure());
    const file = form.get('file') as FormDataEntryValue as File;
    const userid = Number(form.get('id') as FormDataEntryValue as string);
    console.log(userid);
    const filename = file.name;
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
    await new Promise((resolve) => {
        const call = client.videoUpload(function (err: any, res: any) {
            if (err) {
                resolve(err);
            }
            console.log(res.array[0]);
            resolve(true);
        });
        chunks.forEach((chunk: Uint8Array) => {
            const req = new VideoUpoadRequest();
            if (!!filename) req.setName(filename);
            if (!!userid) req.setId(userid);
            if (!!chunk) req.setData(chunk);
            call.write(req);
        });
        call.end();
    });
    console.log('uploaded');
    redirect(`/page11`);
}

async function blobToUint8Array(blob: Blob): Promise<Uint8Array> {
    const arrayBuffer = await blob.arrayBuffer();
    return new Uint8Array(arrayBuffer);
}
