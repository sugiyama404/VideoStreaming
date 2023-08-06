//@ts-ignore
import type { NextAuthOptions } from 'next-auth'
//@ts-ignore
import CredentialsProvider from 'next-auth/providers/credentials'
//@ts-ignore
import * as grpc from '@grpc/grpc-js';
import { ProfileClient } from '@/types/pb/user/user_grpc_pb';
import { AuthUserRequest, AuthUserReply } from '@/types/pb/user/user_pb';
//@ts-ignore
const target: string = process.env.APSERVER_ADDRESS;

export const options: NextAuthOptions = {
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                username: {
                    label: "Username:",
                    type: "text",
                    placeholder: "your-username"
                },
                password: {
                    label: "Password:",
                    type: "password",
                    placeholder: "your-password"
                }
            },
            async authorize(credentials) {
                const users = [{ id: "42", name: "Dave", password: "nextauth", role: "admin" },
                { id: "41", name: "mike", password: "pass", role: "guest" }]

                const user = users.find(user => user.name === credentials?.username);
                if (credentials?.username === user?.name && credentials?.password === user?.password) {
                    return user
                } else {
                    return null
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

    if (!res.getIsuser()) {
        return (res.getIsuser(), null)
    } else {
        return (res.getIsuser(), res.getInfo)
    }
}
