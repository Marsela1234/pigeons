import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        hostname: 'flagcdn.com',
      },
      {
        hostname: 'sjc.microlink.io',
      },
    ],
  },
}

export default nextConfig
