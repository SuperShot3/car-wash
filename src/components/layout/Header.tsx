'use client';

import React from 'react';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header className="fixed w-full bg-zinc-100/95 backdrop-blur-sm z-50 shadow-lg border-b border-zinc-200">
      <nav className="container-custom">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center -ml-8">
            <Link href="/">
              <Image
                src="/images/logo/logo.png"
                alt="Car Spa Logo"
                width={120}
                height={40}
                className="h-10 w-auto drop-shadow-md"
                priority
              />
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-zinc-700 hover:text-gold font-medium transition-colors relative group"
              >
                {item.name}
                <span className="absolute inset-x-0 bottom-0 h-0.5 bg-gold transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
              </Link>
            ))}
            <button className="bg-gradient-to-r from-gold to-amber-500 text-white px-6 py-2.5 rounded-md hover:from-amber-500 hover:to-gold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
              Book Now
            </button>
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
      </nav>

      {isMenuOpen && (
        <div className="md:hidden bg-zinc-100/95 backdrop-blur-sm">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block px-3 py-2 text-zinc-700 hover:text-gold hover:bg-zinc-200/50 rounded-lg transition-all"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <button className="w-full bg-gradient-to-r from-gold to-amber-500 text-white px-6 py-2.5 rounded-md hover:from-amber-500 hover:to-gold transition-all duration-300 shadow-md hover:shadow-lg mt-2">
              Book Now
            </button>
          </div>
        </div>
      )}
    </header>
  );
} 