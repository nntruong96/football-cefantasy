import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: `${process.env.NEXT_API_URL}/:path*`,
      },
    ];
  },
  output: "standalone",
};

export default nextConfig;
