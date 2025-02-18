export default function imageLoader({ src }) {
  const basePath = process.env.NODE_ENV === 'production' ? '/car-wash' : ''
  return `${basePath}${src}`
} 