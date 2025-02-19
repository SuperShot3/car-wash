'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Hero() {
  return (
    <div className="relative h-screen w-full">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/car-wash/images/hero/hero_image.png"
          alt="Hero Background"
          fill
          priority
          className="object-cover"
          quality={100}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50" />
      </div>

      {/* Content */}
      <div className="relative h-full z-10 flex items-center justify-center text-center">
        <div className="max-w-4xl px-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-playfair text-white mb-6"
          >
            Premium Car Care Service
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-white/90 mb-8"
          >
            Trust your vehicle to the professionals
          </motion.p>

          <div className="space-x-4">
            <Link
              href="/contact"
              className="bg-gradient-to-r from-gold to-amber-500 text-white px-8 py-3 rounded-md hover:from-amber-500 hover:to-gold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              Book Now
            </Link>
            <Link
              href="/services"
              className="bg-white text-gold px-8 py-3 rounded-md hover:bg-gray-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              Our Services
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
} 