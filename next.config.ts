import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  allowedDevOrigins: ['*'],
  images: {
    domains: ['ghchart.rshah.org'],
  },
};

export default nextConfig;
