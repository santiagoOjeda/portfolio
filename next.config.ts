import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  // Si estás desplegando en GitHub Pages con un repositorio que no es username.github.io
  // descomenta la siguiente línea y reemplaza 'porfolio' con el nombre de tu repositorio
  // basePath: '/porfolio',
  // assetPrefix: '/porfolio/',
};

export default nextConfig;
