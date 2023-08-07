//@ts-ignore
import type { NextAuthOptions } from 'next-auth'
//@ts-ignore
import CredentialsProvider from 'next-auth/providers/credentials'
//@ts-ignore
import * as grpc from '@grpc/grpc-js';
import { ProfileClient } from '@/types/pb/user/user_grpc_pb';
import { AuthUserRequest, AuthUserReply, UserInfo } from '@/types/pb/user/user_pb';
//@ts-ignore
const target: string = process.env.APSERVER_ADDRESS;

export const options: NextAuthOptions = {
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: {
                    label: "Email:",
                    type: "text",
                    placeholder: "your-email"
                },
                password: {
                    label: "Password:",
                    type: "password",
                    placeholder: "your-password"
                }
            },
            async authorize(credentials) {
                const res = await userauth(credentials?.email, credentials?.password)
                if (res.getIsuser() === false) {
                    return null
                } else {
                    const userinfo = res.getInfo() as UserInfo;
                    const user = { name: userinfo.getName(), email: userinfo.getEmail(), role: userinfo.getRole() }
                    return user
                }
            }
        })
    ],
    session: {
        strategy: "jwt",
        maxAge: 24 * 60 * 60,
    },
    callbacks: {
        async jwt({ token, user }) {
            if (user) token.role = user.role
            return token
        },
        async session({ session, token }) {
            if (session?.user) session.user.role = token.role
            return session
        },
    }
}

async function userauth(email: string, password: string) {
    const client = new ProfileClient(target, grpc.credentials.createInsecure());
    const req = new AuthUserRequest();
    req.setEmail(email);
    req.setPassword(password);
    const res: AuthUserReply = await new Promise((resolve, reject) => {
        client.authUser(req, (err: any, res: AuthUserReply) => {
            if (err) {
                console.log(err)
                const rep = new AuthUserReply();
                rep.setIsuser(false);
                reject(rep)
            } else {
                resolve(res)
            }
        });
    });

    return res;
}
