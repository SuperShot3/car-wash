/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  // Важно для статической генерации
  images: {
    unoptimized: true, // Необходимо для экспорта изображений
  },
  basePath: process.env.NODE_ENV === 'production' ? '/car-wash' : '', // Обновлено на car-wash
  assetPrefix: process.env.NODE_ENV === 'production' ? '/car-wash' : '',
}

module.exports = nextConfig 