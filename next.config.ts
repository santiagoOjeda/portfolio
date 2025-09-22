import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath: '/porfolio',
  assetPrefix: '/porfolio/',
  images: {
    unoptimized: true
  },
};

export default nextConfig;
