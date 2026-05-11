import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/soyoung",
  assetPrefix: "/soyoung/",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
