import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  trailingSlash: true,
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async redirects() {
    return [
      {
        source: "/dunross-website.vercel.app/:path*",
        destination: "https://dunross.co/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
