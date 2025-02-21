'use client';

import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import 'leaflet/dist/leaflet.css';

// Динамически импортируем компоненты карты без SSR
const MapWithNoSSR = dynamic(
  () => import('./MapComponent'),
  { 
    ssr: false,
    loading: () => <div className="h-[400px] w-full rounded-lg overflow-hidden shadow-lg bg-gray-100 flex items-center justify-center">
      <p>Загрузка карты...</p>
    </div>
  }
);

export default function Map() {
  return <MapWithNoSSR />;
} 