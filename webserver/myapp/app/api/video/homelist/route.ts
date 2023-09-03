//@ts-ignore
import { NextResponse, NextRequest } from 'next/server'
//@ts-ignore
import * as grpc from '@grpc/grpc-js';
import { VideotransporterClient } from '@/types/pb/s3video/s3video_grpc_pb';
import { Empty, VideoHomeListReplay } from '@/types/pb/s3video/s3video_pb';
import { VideoHomelist } from '@/types/typing/video';
//@ts-ignore
const target: string = process.env.APSERVER_ADDRESS;

export async function GET() {
    const client = new VideotransporterClient(target, grpc.credentials.createInsecure());
    const res = await new Promise<VideoHomelist[]>((resolve, reject) => {
        client.videoHomeList(new Empty, (err, res: VideoHomeListReplay) => {
            if (err) reject(err);
            const vl = res.getVideohomelistobjectsList();
            const r = vl.map(v => ({
                uuid: v.getUuid(),
                title: v.getTitle(),
                explain: v.getExplain(),
                imguuid: v.getImguuid(),
                imgext: v.getImgext(),
            }));
            resolve(r);
        });
    });
    return NextResponse.json(res)
}

