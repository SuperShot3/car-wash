'use client';

import { useLanguage } from '@/context/LanguageContext';
import dynamic from 'next/dynamic';

// Динамически импортируем карту без SSR
const Map = dynamic(() => import('@/components/ui/Map'), {
  ssr: false,
  loading: () => (
    <div className="h-[400px] w-full rounded-lg bg-gray-100 flex items-center justify-center">
      <p>Loading map...</p>
    </div>
  ),
});

export default function MapSection() {
  const { t } = useLanguage();
  
  return (
    <section id="map" className="py-16 bg-white">
      <div className="container-custom">
        <h2 className="text-3xl md:text-4xl font-playfair text-center mb-12">
          {t('map.title')}
        </h2>
        <div className="h-[400px] w-full rounded-lg overflow-hidden shadow-lg">
          <Map />
        </div>
      </div>
    </section>
  );
} 