/** @type {import('next').NextConfig} */

import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/',
        destination: '/home',
      },
    ]
  },
  // images: {
  //   domains: ['localhost'], // 画像を置いているドメイン
  // },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
};

export default nextConfig;