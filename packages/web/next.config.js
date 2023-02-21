/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
    domains: ['localhost', 'k.kakaocdn.net', 'lh3.googleusercontent.com', 'phinf.pstatic.net', '*'],
  },
};

module.exports = nextConfig;
