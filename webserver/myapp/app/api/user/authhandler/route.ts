//@ts-ignore
import { options } from '../../auth/[...nextauth]/options'
//@ts-ignore
import { NextResponse } from 'next/server';
//@ts-ignore
import { getServerSession } from "next-auth/next"

export async function GET() {
    const session = await getServerSession(options)

    console.log(session?.user)

    return NextResponse.json({ user: session?.user });
}
