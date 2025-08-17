import type { NextConfig } from 'next';
const isProd = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
  /* config options here */
  output: 'export',
  basePath: isProd ? `/Website`: '',
  assetPrefix: isProd ? `/Website/` : '',
};

export default nextConfig;
