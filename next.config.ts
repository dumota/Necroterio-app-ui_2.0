import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'localhost',
        port: '',
        pathname: '/api/**',
      },
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      }
    ],
  },
  // Configuração para upload de arquivos (App Router)
  experimental: {
    serverActions: {
      bodySizeLimit: '10mb', // Limite de 10MB para server actions
    },
  },
};

export default nextConfig;
