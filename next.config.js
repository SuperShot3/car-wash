/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  // Возвращаем обратно 'export' вместо 'getStaticPaths'
  images: {
    unoptimized: true, // Необходимо для экспорта изображений
  },
  basePath: '/car-wash',  // Убираем условие
  assetPrefix: '/car-wash', // Убираем условие
  trailingSlash: true, // Добавляем слэш в конце URL
  // Добавляем конфигурацию для статической генерации
  experimental: {
    staticPageGenerationTimeout: 300,
  },
}

module.exports = nextConfig 