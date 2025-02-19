'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="fixed w-full bg-transparent backdrop-blur-sm z-50 transition-all duration-300">
      <div className="container-custom py-6">
        <div className="flex justify-between items-center">
          <Link href="/" className="relative w-48 h-16">
            <Image
              src="/car-wash/images/logo/logo.png"
              alt="Car Spa Logo"
              fill
              className="object-contain object-left"
              priority
            />
          </Link>
          {/* ... остальной код ... */}
        </div>
      </div>
    </header>
  );
} 