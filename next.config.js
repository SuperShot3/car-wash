/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  // Возвращаем обратно 'export' вместо 'getStaticPaths'
  images: {
    unoptimized: true, // Необходимо для экспорта изображений
  },
  basePath: '/car-wash',  // Убираем условие
  assetPrefix: '/car-wash', // Убираем условие
  trailingSlash: true, // Добавляем слэш в конце URL
}

module.exports = nextConfig 