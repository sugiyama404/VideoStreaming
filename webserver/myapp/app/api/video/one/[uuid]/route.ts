//@ts-ignore
import { NextResponse, NextRequest } from 'next/server'
//@ts-ignore
import * as grpc from '@grpc/grpc-js';
import { VideotransporterClient } from '@/types/pb/s3video/s3video_grpc_pb';
import { VideoOneRequest, VideoOneReplay } from '@/types/pb/s3video/s3video_pb';
import { Videolist } from '@/types/typing/video';
//@ts-ignore
const target: string = process.env.APSERVER_ADDRESS;

export async function GET(request: NextRequest, { params }: { params: { uuid: string } }) {
    const uuid = params.uuid;
    const client = new VideotransporterClient(target, grpc.credentials.createInsecure());
    const req = new VideoOneRequest();
    if (!!uuid) req.setUuid(uuid);
    const res = await new Promise<Videolist>((resolve, reject) => {
        client.videoOne(req, (res: VideoOneReplay, err) => {
            if (err) reject(err);
            resolve({
                id: res.getId(),
                title: res.getTitle(),
                category: res.getCategory(),
                tags: res.getTagsList(),
                explain: res.getExplain()
            });
        });
    });
    return NextResponse.json(res)
}

