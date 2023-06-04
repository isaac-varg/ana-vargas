/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.imgur.com',
        port: '',
        pathname: '/*'
      },
      {
        protocol: 'https',
        hostname: process.env.BUCKET_URL,
        port: '',
        pathname: '/**'
      },
    ]
  }
};

module.exports = nextConfig;

