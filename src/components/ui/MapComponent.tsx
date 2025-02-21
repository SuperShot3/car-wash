'use client';

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { useLanguage } from '@/context/LanguageContext';
import { useEffect } from 'react';

const MapComponent = () => {
  const { t } = useLanguage();
  const position: [number, number] = [55.7558, 37.6173];

  useEffect(() => {
    // Fix Leaflet icon issue
    delete (L.Icon.Default.prototype as any)._getIconUrl;
    L.Icon.Default.mergeOptions({
      iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
      iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
      shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
    });
  }, []);

  return (
    <div className="h-[400px] w-full rounded-lg overflow-hidden shadow-lg">
      <MapContainer 
        center={position} 
        zoom={15}
        scrollWheelZoom={true}
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
    </div>
  );
};

export default MapComponent; 