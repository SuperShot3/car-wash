'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-zinc-900 text-white py-12">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Логотип и описание */}
          <div className="flex flex-col items-center md:items-start">
            <Link href="/" className="relative w-40 h-12 mb-4">
              <Image
                src="/car-wash/images/logo/logo-white.png"
                alt="Car Spa Logo"
                fill
                className="object-contain"
                priority
              />
            </Link>
            <p className="text-zinc-400 text-sm">Premium Car Care Service</p>
          </div>

          {/* Контактная информация */}
          <div className="text-center md:text-left">
            <h4 className="text-lg font-medium mb-4">Contact</h4>
            <div className="text-zinc-400 text-sm space-y-2">
              <p>Phone: +1 (555) 123-4567</p>
              <p>Email: info@carspa.com</p>
            </div>
          </div>

          {/* Рабочие часы */}
          <div className="text-center md:text-left">
            <h4 className="text-lg font-medium mb-4">Working Hours</h4>
            <div className="text-zinc-400 text-sm space-y-2">
              <p>Mon-Fri: 9:00 AM - 8:00 PM</p>
              <p>Sat-Sun: 10:00 AM - 6:00 PM</p>
            </div>
          </div>

          {/* Социальные сети */}
          <div className="flex flex-col items-center md:items-start">
            <h4 className="text-lg font-medium mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              {/* Facebook */}
              <a 
                href="#" 
                className="text-[#1877F2] hover:text-[#1877F2]/80 transition-colors"
                aria-label="Facebook"
              >
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>

              {/* Instagram */}
              <a 
                href="#" 
                className="instagram-icon hover:opacity-80 transition-opacity"
                aria-label="Instagram"
              >
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M16.98 0a6.9 6.9 0 0 1 5.08 1.98A6.94 6.94 0 0 1 24 7.02v9.96c0 2.08-.68 3.87-1.98 5.13A7.14 7.14 0 0 1 16.94 24H7.06a7.06 7.06 0 0 1-5.03-1.89A6.96 6.96 0 0 1 0 16.94V7.02C0 2.8 2.8 0 7.02 0h9.96zm.05 2.23H7.06c-1.45 0-2.7.43-3.53 1.25a4.82 4.82 0 0 0-1.3 3.54v9.92c0 1.5.43 2.7 1.3 3.58a5 5 0 0 0 3.53 1.25h9.88a5 5 0 0 0 3.53-1.25 4.73 4.73 0 0 0 1.4-3.54V7.02a5 5 0 0 0-1.3-3.49 4.82 4.82 0 0 0-3.54-1.3zM12 5.76c3.39 0 6.2 2.8 6.2 6.2a6.2 6.2 0 0 1-12.4 0 6.2 6.2 0 0 1 6.2-6.2zm0 2.22a3.99 3.99 0 0 0-3.97 3.97A3.99 3.99 0 0 0 12 15.92a3.99 3.99 0 0 0 3.97-3.97A3.99 3.99 0 0 0 12 7.98zm6.44-3.77a1.4 1.4 0 1 1 0 2.8 1.4 1.4 0 0 1 0-2.8z"/>
                </svg>
              </a>

              {/* Line */}
              <a 
                href="#" 
                className="text-[#00B900] hover:text-[#00B900]/80 transition-colors"
                aria-label="Line"
              >
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.346 0 .627.285.627.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.282.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Копирайт */}
        <div className="pt-6 border-t border-zinc-800 text-center">
          <p className="text-zinc-400 text-sm">&copy; {new Date().getFullYear()} Car Spa. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
} 