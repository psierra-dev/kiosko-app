/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    styledComponents: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "romapy.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

module.exports = nextConfig;
