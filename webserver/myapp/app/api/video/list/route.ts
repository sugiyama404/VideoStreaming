//@ts-ignore
import { NextResponse, NextRequest } from 'next/server'
//@ts-ignore
import * as grpc from '@grpc/grpc-js';
import { VideotransporterClient } from '@/types/pb/s3video/s3video_grpc_pb';
import { Empty, VideoListReplay } from '@/types/pb/s3video/s3video_pb';
type videolist = typeof import('@/types/typing/video');
//@ts-ignore
const target: string = process.env.APSERVER_ADDRESS;

export async function GET() {
    const client = new VideotransporterClient(target, grpc.credentials.createInsecure());
    const res = await new Promise<videolist[]>((resolve, reject) => {
        client.videoList(new Empty, (err, res: VideoListReplay) => {
            if (err) reject(err);
            const vl = res.getVideolistobjectList();
            const r = vl.map(v => ({
                id: v.getId(),
                title: v.getTitle(),
                category: v.getCategory(),
                tags: v.getTagsobjectsList().map(t => t.getTags()),
                explain: v.getExplain()
            }));
            resolve(r);
        });
    });
    return NextResponse.json(res)
}

