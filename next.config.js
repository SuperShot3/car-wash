/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  // Статическая генерация
  images: {
    unoptimized: true, // Для GitHub Pages
  },
  basePath: '/car-spa', // Это будет часть URL вашего сайта
}

module.exports = nextConfig 