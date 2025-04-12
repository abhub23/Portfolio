import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  allowedDevOrigins: [
    'http://192.168.0.104:3000',
    'http://localhost:3000',
    'http://127.0.0.1:3000'
  ],   
  images: {
    domains: ['ghchart.rshah.org'],
  },
  /* config options here */
};

export default nextConfig;
