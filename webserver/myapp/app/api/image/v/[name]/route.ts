//@ts-ignore
import { NextResponse, NextRequest } from 'next/server'
//@ts-ignore
import * as grpc from '@grpc/grpc-js';
import { ImagetransporterClient } from '@/types/pb/s3image/s3image_grpc_pb';
import { ImageDownloadRequest, ImageDownloadReplay } from '@/types/pb/s3image/s3image_pb';
//@ts-ignore
const target: string = process.env.APSERVER_ADDRESS;

export async function GET(request: NextRequest,
    { params }: { params: { name: string } }) {
    const image_name = params.name;
    console.log(image_name);
    const heigh = 220;
    const width = 320;
    const flag = true;
    const client: ImagetransporterClient = new ImagetransporterClient(target, grpc.credentials.createInsecure());
    const req: ImageDownloadRequest = new ImageDownloadRequest();
    req.setName(image_name);
    req.setReheight(heigh);
    req.setRewidth(width);

    const res = await new Promise((resolve, reject) => {
        client.imageDownload(req, (err, res) => {
            if (err) reject(err);
            const blob = new Blob([res.getImage()], { type: "image/png" });
            resolve(blob);
        });
    });
    const data = await res;
    return new NextResponse(data);
}
