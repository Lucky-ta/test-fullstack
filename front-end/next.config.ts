import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  env: {
    api: process.env.api,
  },
  compiler: {
    styledComponents: true,
  },
};

export default nextConfig;
