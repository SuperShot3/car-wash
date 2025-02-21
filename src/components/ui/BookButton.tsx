'use client';

import { useLanguage } from '@/context/LanguageContext';

export default function BookButton() {
  const { t } = useLanguage();

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <button
      onClick={scrollToContact}
      className="bg-gold hover:bg-amber-600 text-white px-4 py-2 rounded-md transition-colors duration-300"
    >
      {t('nav.bookNow')}
    </button>
  );
} 