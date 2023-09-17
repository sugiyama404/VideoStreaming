/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET,
        NEXTAUTH_URL: process.env.NEXTAUTH_URL,
        APSERVER_ADDRESS: process.env.APSERVER_ADDRESS,
    },
    experimental: {
        serverActions: true,
    },
}

module.exports = nextConfig
