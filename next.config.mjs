/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "mov.cfdstudio.vn",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
