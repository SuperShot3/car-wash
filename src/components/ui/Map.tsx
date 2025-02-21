'use client';

import { useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { useLanguage } from '@/context/LanguageContext';

// Фиксим иконки Leaflet
const fixLeafletIcons = () => {
  delete (L.Icon.Default.prototype as any)._getIconUrl;
  L.Icon.Default.mergeOptions({
    iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
    iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
    shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
  });
};

export default function Map() {
  const { t } = useLanguage();
  const position: [number, number] = [55.7558, 37.6173]; // Москва

  useEffect(() => {
    fixLeafletIcons();
  }, []);

  return (
    <MapContainer
      center={position}
      zoom={15}
      scrollWheelZoom={false}
      style={{ height: '100%', width: '100%' }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position}>
        <Popup>
          <div className="text-center">
            <h3 className="font-semibold">{t('map.title')}</h3>
            <p>{t('map.welcome')}</p>
          </div>
        </Popup>
      </Marker>
    </MapContainer>
  );
} 