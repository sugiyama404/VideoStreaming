//@ts-ignore
import { NextResponse, NextRequest } from 'next/server'
//@ts-ignore
import * as grpc from '@grpc/grpc-js';
import { ProfileClient } from '@/types/pb/user/user_grpc_pb';
import { RegisterRequest, Message } from '@/types/pb/user/user_pb';
const target: string = 'apserver:8080';

export async function POST(request: NextRequest) {
    const client = new ProfileClient(target, grpc.credentials.createInsecure());
    const req = new RegisterRequest();
    const req_data = await request.json();
    const { name, email, password, role } = req_data;
    if (!!name) req.setName(name);
    if (!!email) req.setEmail(email);
    if (!!password) req.setPassword(password);
    if (!!role) req.setRole(role);
    const res = await new Promise<Message>((resolve, reject) => {
        client.registerUser(req, (err, res) => {
            if (err) reject(err);
            resolve(res);
        });
    });
    return NextResponse.json({ message: res.getMessage() })
}
