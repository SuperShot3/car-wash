/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['vercel.com'], // Добавьте домены, если используете внешние изображения
    unoptimized: false, // На Vercel можно использовать оптимизацию изображений
  },
  env: {
    GEMINI_API_KEY: process.env.GEMINI_API_KEY,
    NEXT_PUBLIC_GOOGLE_MAPS_API_KEY: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
    EMAIL_SERVICE_KEY: process.env.EMAIL_SERVICE_KEY,
  }
}

module.exports = nextConfig 