'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const router = useRouter();

  // Отслеживаем скролл
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  const handleBookNow = () => {
    router.push('/contact');
    setIsMenuOpen(false); // Закрываем мобильное меню при клике
  };

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled && !isMenuOpen
          ? 'bg-transparent backdrop-blur-sm' 
          : 'bg-white/95 backdrop-blur-sm shadow-md'
      }`}
    >
      <div className="container-custom py-2 md:py-3">
        <div className="flex justify-between items-left max-w-[95%] mx-auto">
          <Link 
            href="/" 
            className="relative w-[20%] max-w-[105px] min-w-[100px] aspect-[2/1] -ml-[2%] md:-ml-[5%]"
          >
            <div className="relative w-full h-full">
              <Image
                src="/images/logo/logo.png"
                alt="Car Spa Logo"
                fill
                className="object-contain object-left"
                priority
              />
            </div>
          </Link>
          
          <div className="hidden md:flex items-center mr-[-2%]">
            <div className="flex items-center space-x-10">
              {menuItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-sm text-zinc-700 hover:text-gold font-medium transition-colors relative group"
                >
                  {item.name}
                  <span className="absolute inset-x-0 bottom-0 h-0.5 bg-gold transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
                </Link>
              ))}
              <button 
                onClick={handleBookNow}
                className="bg-gradient-to-r from-gold to-amber-500 text-white px-5 py-2 rounded-md hover:from-amber-500 hover:to-gold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 text-sm"
              >
                Book Now
              </button>
            </div>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-zinc-700 hover:text-gold transition-colors p-2 rounded-lg hover:bg-zinc-200"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-sm">
          <div className="px-2 pt-2 pb-2 space-y-1 sm:px-3">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block px-3 py-1.5 text-sm text-zinc-700 hover:text-gold hover:bg-zinc-200/50 rounded-lg transition-all"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <button 
              onClick={handleBookNow}
              className="w-full bg-gradient-to-r from-gold to-amber-500 text-white px-5 py-2 rounded-md hover:from-amber-500 hover:to-gold transition-all duration-300 shadow-md hover:shadow-lg mt-2 text-sm"
            >
              Book Now
            </button>
          </div>
        </div>
      )}
    </header>
  );
} 