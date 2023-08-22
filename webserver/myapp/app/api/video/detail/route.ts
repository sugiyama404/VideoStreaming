//@ts-ignore
import { NextResponse, NextRequest } from 'next/server'
//@ts-ignore
import * as grpc from '@grpc/grpc-js';
import { VideotransporterClient } from '@/types/pb/s3video/s3video_grpc_pb';
import { VideoDeteilUpoadRequest, VideoDeteilUpoadReplay } from '@/types/pb/s3video/s3video_pb';
//@ts-ignore
const target: string = process.env.APSERVER_ADDRESS;

export async function POST(request: NextRequest) {
    const client = new VideotransporterClient(target, grpc.credentials.createInsecure());
    const req = new VideoDeteilUpoadRequest();
    const req_data = await request.json();
    const {
        uuid, title, explain, category, tags, extension
    } = req_data;

    if (!!uuid) { req.setVideoUuid(uuid) }
    if (!!title) { req.setTitle(title) }
    if (!!explain) { req.setExplain(explain) }
    if (!!category) { req.setCategory(category) }
    if (!!tags) { req.setTagsList(tags) }
    if (!!extension) { req.setExtension$(extension) }
    console.log(req);

    const res = await new Promise<VideoDeteilUpoadReplay>((resolve, reject) => {
        client.videoDeteilUpload(req, (err, res) => {
            if (err) reject(err);
            resolve(res);
        });
    });
    return NextResponse.json({ uuid: res.getUuid })
}
