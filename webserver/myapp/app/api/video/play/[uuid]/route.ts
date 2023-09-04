//@ts-ignore
import { NextResponse, NextRequest } from 'next/server'
//@ts-ignore
import * as grpc from '@grpc/grpc-js';
import { VideotransporterClient } from '@/types/pb/s3video/s3video_grpc_pb';
import { VideoDownloadRequest, VideoDownloadReplay } from '@/types/pb/s3video/s3video_pb';
//@ts-ignore
const target: string = process.env.APSERVER_ADDRESS;
const CHUNK_SIZE = 10 ** 6;

async function getVideoStream(filename: string, startbytes: number, endbytes: number) {
    const client = new VideotransporterClient(target, grpc.credentials.createInsecure());
    const req = new VideoDownloadRequest();
    if (!!filename) req.setName(filename);
    if (!!startbytes) req.setStartbytes(startbytes);
    if (!!endbytes) req.setEndbytes(endbytes);
    const res = await new Promise((resolve) => {
        client.videoDownload(req, function (err: unknown, response: any) {
            if (err != null) {
                console.log(err);
            }
            const movie_data = response.array[0];
            resolve(movie_data);
        });
    });
    const data = await res;
    return data;
}

function getVideoRequest(req: Request, uuid: string) {
    const range = req.headers.get("Range");
    const params = new URLSearchParams(new URL(req.url).search);
    console.log(range);
    if (!range) {
        return null;
    };
    const filename: string = uuid + "." + params.get("type");
    const videoSize: number = Number(params.get("size"));

    const start = Number(range.replace(/\D/g, "")); // 32324
    const end = Math.min(start + CHUNK_SIZE, videoSize - 1);

    // Create headers
    const contentLength = end - start + 1;
    const headers = {
        "Content-Range": `bytes ${start}-${end}/${videoSize}`,
        "Accept-Ranges": "bytes",
        "Content-Length": contentLength.toString(),
        "Content-Type": "video/mp4",
    } as { [key: string]: string };

    const videoStream = new ReadableStream({
        type: "bytes",
        async start(controller) {
            const value = await getVideoStream(filename, start, end) as Uint8Array;
            controller.enqueue(value);
        },
    })
    return new Response(videoStream as any, {
        status: 206,
        headers,
    });
}

export async function GET(req: Request, { params }: { params: { uuid: string } }) {
    const video_uuid = params.uuid;
    return getVideoRequest(req, video_uuid);
}

