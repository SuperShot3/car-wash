'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { useRouter, usePathname } from 'next/navigation';

export default function Header() {
  const { language, setLanguage, t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const handleBookNow = () => {
    router.push('/contact');
    setIsOpen(false);
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    
    if (id === 'home') {
      if (pathname === '/') {
        // Если мы на главной странице, просто скроллим к началу
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        // Если мы на другой странице, редиректим на главную
        router.push('/');
      }
    } else {
      // Для остальных пунктов меню
      if (pathname !== '/') {
        // Если мы не на главной, сначала переходим на главную
        router.push(`/#${id}`);
      } else {
        // Если мы на главной, просто скроллим к нужной секции
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
    
    setIsOpen(false);
  };

  // Отслеживаем скролл для изменения стиля хедера
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed w-full top-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/80 backdrop-blur-md shadow-lg' 
        : 'bg-white/60 backdrop-blur-sm'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          <Link href="/" className="flex items-center md:ml-[-4rem] lg:ml-[-4rem] relative group">
            <div className="relative w-[120px] h-[50px] transition-transform duration-300 group-hover:scale-105">
              <Image
                src="/images/logo/logo.png"
                alt="Car Service Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
          </Link>

          <div className="flex items-center space-x-4 md:mr-[-4rem] lg:mr-[-4rem]">
            <nav className="hidden md:flex space-x-8">
              {['home', 'services', 'about', 'pricing'].map((item) => (
                <Link
                  key={item}
                  href={`#${item}`}
                  onClick={(e) => handleNavClick(e, item)}
                  className="text-charcoal hover:text-gold transition-all duration-300 relative group py-2"
                >
                  {t(`nav.${item}`)}
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gold transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
                </Link>
              ))}
            </nav>

            <div className="hidden md:flex items-center space-x-4">
              <button
                onClick={handleBookNow}
                className="bg-gold hover:bg-amber-600 text-white px-6 py-2.5 rounded-full transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg"
              >
                {t('nav.bookNow')}
              </button>
              <button 
                onClick={() => setLanguage(language === 'en' ? 'ru' : 'en')}
                className="px-4 py-2 rounded-full border-2 border-charcoal text-charcoal hover:bg-charcoal hover:text-white transition-all duration-300 transform hover:scale-105"
              >
                {language.toUpperCase()}
              </button>
            </div>
          </div>

          <button 
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-300"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>

        {/* Мобильное меню с анимацией */}
        <div className={`md:hidden transition-all duration-300 ${
          isOpen 
            ? 'max-h-96 opacity-100' 
            : 'max-h-0 opacity-0 overflow-hidden'
        }`}>
          <nav className="py-4 bg-white/80 backdrop-blur-md rounded-lg shadow-lg mt-2">
            <div className="flex flex-col space-y-4 px-4">
              {['home', 'services', 'about', 'pricing'].map((item) => (
                <Link
                  key={item}
                  href={`#${item}`}
                  onClick={(e) => handleNavClick(e, item)}
                  className="text-charcoal hover:text-gold transition-colors duration-300"
                >
                  {t(`nav.${item}`)}
                </Link>
              ))}
              <div className="flex items-center space-x-4 pt-4 border-t border-gray-200">
                <button
                  onClick={handleBookNow}
                  className="bg-gold hover:bg-amber-600 text-white px-6 py-2.5 rounded-full transition-all duration-300 flex-1"
                >
                  {t('nav.bookNow')}
                </button>
                <button 
                  onClick={() => setLanguage(language === 'en' ? 'ru' : 'en')}
                  className="px-4 py-2 rounded-full border-2 border-charcoal text-charcoal hover:bg-charcoal hover:text-white transition-all duration-300"
                >
                  {language.toUpperCase()}
                </button>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
} 