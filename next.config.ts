import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  allowedDevOrigins: [
    'http://192.168.0.104:3000',  // IP of your computer in the local network
    'http://localhost:3000',
    'http://127.0.0.1:3000',
    'http://103.221.248.91:3000' // Make sure to replace <your-computer-ip> with your actual computer's IP address
  ],   
  images: {
    domains: ['ghchart.rshah.org'],
  },
  /* config options here */
};

export default nextConfig;
