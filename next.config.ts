import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/LiQid-Web-Site",
  assetPrefix: "/LiQid-Web-Site/",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  turbopack: {
    root: path.resolve(__dirname),
  },
  env: {
    NEXT_PUBLIC_BASE_PATH: process.env.NODE_ENV === "development" ? "" : "/LiQid-Web-Site",
  },
};

export default nextConfig;
