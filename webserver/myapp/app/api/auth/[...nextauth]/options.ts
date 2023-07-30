//@ts-ignore
import type { NextAuthOptions } from 'next-auth'
//@ts-ignore
import CredentialsProvider from 'next-auth/providers/credentials'

export const options: NextAuthOptions = {
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                username: {
                    label: "Username:",
                    type: "text",
                    placeholder: "your-cool-username"
                },
                password: {
                    label: "Password:",
                    type: "password",
                    placeholder: "your-awesome-password"
                }
            },
            async authorize(credentials) {
                const users = [{ id: "42", name: "Dave", password: "nextauth", role: "admin" },
                { id: "41", name: "mike", password: "pass", role: "guest" }]
                const user = users.find(user => user.name === credentials?.name);
                if (credentials?.username === user?.name && credentials?.password === user?.password) {
                    return user
                } else {
                    return null
                }
            }
        })
    ],
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
