/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  // Важно для статической генерации
  images: {
    unoptimized: true
  },
  basePath: '/car-wash', // Имя вашего репозитория
}

module.exports = nextConfig 