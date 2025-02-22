/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
    unoptimized: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  poweredByHeader: false,
  env: {
    GEMINI_API_KEY: process.env.GEMINI_API_KEY,
    EMAIL_SERVICE_KEY: process.env.EMAIL_SERVICE_KEY,
  }
}

module.exports = nextConfig 