/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  // Возвращаем обратно 'export' вместо 'getStaticPaths'
  images: {
    unoptimized: true, // Необходимо для экспорта изображений
  },
  basePath: '/car-wash',
  assetPrefix: '/car-wash', // Убираем условие
  trailingSlash: true, // Добавляем слэш в конце URL
  env: {
    GEMINI_API_KEY: process.env.GEMINI_API_KEY,
  }
}

module.exports = nextConfig 