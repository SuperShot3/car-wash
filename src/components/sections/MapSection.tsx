'use client';

import { motion } from 'framer-motion';
import { MapPinIcon, PhoneIcon, ClockIcon } from '@heroicons/react/24/outline';
import { config } from '@/utils/config';

export default function MapSection() {
  const mapUrl = `https://www.google.com/maps/embed/v1/place?key=${config.googleMapsApiKey}&q=place_id:YOUR_PLACE_ID`;

  return (
    <section className="py-20 bg-zinc-50">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="max-w-lg">
              <h2 className="text-3xl md:text-4xl font-playfair mb-4">Visit Our Location</h2>
              <p className="text-zinc-600">
                Conveniently located in the heart of the city, our facility is equipped with state-of-the-art equipment to provide the best care for your vehicle.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <MapPinIcon className="w-6 h-6 text-gold flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-zinc-800 mb-1">Address</h3>
                  <p className="text-zinc-600">123 Detailing Street, Los Angeles, CA 90210</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <PhoneIcon className="w-6 h-6 text-gold flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-zinc-800 mb-1">Contact</h3>
                  <p className="text-zinc-600">+1 (555) 123-4567</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <ClockIcon className="w-6 h-6 text-gold flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-zinc-800 mb-1">Working Hours</h3>
                  <p className="text-zinc-600">Monday - Saturday: 9AM - 6PM</p>
                  <p className="text-zinc-600">Sunday: Closed</p>
                </div>
              </div>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-gold to-amber-500 text-white px-8 py-3 rounded-md hover:from-amber-500 hover:to-gold transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Get Directions
            </motion.button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-lg overflow-hidden shadow-xl h-[400px] md:h-[500px]"
          >
            <iframe
              src={mapUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full"
            ></iframe>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 