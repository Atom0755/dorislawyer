/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'dorislawyer.com',
      },
    ],
  },
}

module.exports = nextConfig
