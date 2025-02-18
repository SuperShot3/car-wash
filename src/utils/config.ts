export const config = {
  googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
  emailServiceKey: process.env.NEXT_PUBLIC_EMAIL_SERVICE_KEY,
} as const;

// Проверка наличия необходимых ключей
if (!config.googleMapsApiKey) {
  console.warn('Google Maps API key is not set in .env.local');
}

if (!config.emailServiceKey) {
  console.warn('Email service key is not set in .env.local');
} 