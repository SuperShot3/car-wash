/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  // Важно для статической генерации
  images: {
    unoptimized: true, // Необходимо для экспорта изображений
  },
  basePath: process.env.NODE_ENV === 'production' ? '/car-spa' : '', // Используем имя вашего репозитория
  assetPrefix: process.env.NODE_ENV === 'production' ? '/car-spa' : '',
}

module.exports = nextConfig 