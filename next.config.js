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
    NEXT_PUBLIC_GOOGLE_MAPS_API_KEY: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
    EMAIL_SERVICE_KEY: process.env.EMAIL_SERVICE_KEY,
  }
}

module.exports = nextConfig 