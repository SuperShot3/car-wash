/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  // Важно для статической генерации
  images: {
    unoptimized: true, // Необходимо для экспорта изображений
  },
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || '', // Для GitHub Pages
  assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH || '',
}

module.exports = nextConfig 