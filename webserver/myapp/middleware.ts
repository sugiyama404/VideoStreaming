//@ts-ignore
import { withAuth, NextRequestWithAuth } from "next-auth/middleware"
//@ts-ignore
import { NextResponse } from "next/server"

export default withAuth(
    function middleware(request: NextRequestWithAuth) {
        if (request.nextUrl.pathname.startsWith("/administrator")
            && request.nextauth.token?.role !== "admin") {
            return NextResponse.rewrite(
                new URL("/", request.url)
            )
        }
    },
    {
        callbacks: {
            authorized: ({ token }) => !!token
        },
    }
)

export const config = {
    matcher: ["/administrator", "/administrator/*", "/guest"]
}
