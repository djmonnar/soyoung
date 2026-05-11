import type { NextConfig } from "next";
import { PHASE_DEVELOPMENT_SERVER } from "next/constants";

const nextConfig = (phase: string): NextConfig => {
  const isDev = phase === PHASE_DEVELOPMENT_SERVER;

  return {
    output: "export",
    ...(isDev
      ? {}
      : {
          basePath: "/soyoung",
          assetPrefix: "/soyoung/",
        }),
    images: {
      unoptimized: true,
    },
  };
};

export default nextConfig;
