/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['localhost', 'k.kakaocdn.net', '*'],
  },
};

module.exports = nextConfig;
