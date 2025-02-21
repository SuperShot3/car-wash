'use client';

import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';

const Map = dynamic(
  () => import('./LeafletMap'),
  { 
    ssr: false,
    loading: () => (
      <div className="h-[400px] w-full rounded-lg overflow-hidden shadow-lg bg-gray-100 flex items-center justify-center">
        <p>Загрузка карты...</p>
      </div>
    )
  }
);

export default function MapComponent() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return (
      <div className="h-[400px] w-full rounded-lg overflow-hidden shadow-lg bg-gray-100 flex items-center justify-center">
        <p>Загрузка карты...</p>
      </div>
    );
  }

  return <Map />;
} 