'use client';

import { useLanguage } from '@/context/LanguageContext';
import Map from '../ui/Map';

export default function Contact() {
  const { t } = useLanguage();

  return (
    <section id="contact" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">{t('contact.title')}</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="contact-info space-y-4">
            <div>
              <h3 className="text-xl font-semibold mb-2">{t('contact.info.address')}</h3>
              <p>{t('footer.address')}</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">{t('contact.info.phone')}</h3>
              <p>{t('footer.phone')}</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">{t('contact.info.email')}</h3>
              <p>{t('footer.email')}</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">{t('contact.info.hours')}</h3>
              <p>{t('footer.weekdays')}</p>
              <p>{t('footer.saturday')}</p>
              <p>{t('footer.sunday')}</p>
            </div>
          </div>
          <div className="map-container relative z-0">
            <Map />
          </div>
        </div>
      </div>
    </section>
  );
} 