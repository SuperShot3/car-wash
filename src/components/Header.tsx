'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="fixed w-full bg-white z-50 shadow-md">
      <div className="container-custom py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="relative w-40 h-12">
            <Image
              src="/car-wash/images/logo/logo.png"
              alt="Car Spa Logo"
              fill
              className="object-contain"
              priority
            />
          </Link>
          {/* ... остальной код ... */}
        </div>
      </div>
    </header>
  );
} 