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
    const req_data = await request.json();
    const { file, name } = req_data;
    if (!!name) req.setName(name);
    if (!!file) req.setImage(file);
    const res = await new Promise<Message>((resolve, reject) => {
        client.imageUpload(req, (err, res) => {
            if (err) reject(err);
            resolve(res);
        });
    });
    return NextResponse.json({ message: res.getMessage() })
}
