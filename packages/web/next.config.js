/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['localhost', 'k.kakaocdn.net', 'lh3.googleusercontent.com', 'phinf.pstatic.net', '*'],
  },
};

module.exports = nextConfig;
