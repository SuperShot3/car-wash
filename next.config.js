/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  // Важно для статической генерации
  images: {
    unoptimized: true, // Необходимо для экспорта изображений
    loader: 'custom',
    loaderFile: './image-loader.js',
  },
  basePath: process.env.NODE_ENV === 'production' ? '/car-wash' : '', // Обновлено на car-wash
  assetPrefix: process.env.NODE_ENV === 'production' ? '/car-wash' : '',
  trailingSlash: true, // Добавляем слэш в конце URL
}

module.exports = nextConfig 