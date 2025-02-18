'use client';

import { motion } from 'framer-motion';
import { PhoneIcon, EnvelopeIcon, MapPinIcon, ClockIcon } from '@heroicons/react/24/outline';

export default function ContactInfo() {
  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              icon: PhoneIcon,
              title: 'Phone',
              content: '+1 (555) 123-4567',
              link: 'tel:+15551234567'
            },
            {
              icon: EnvelopeIcon,
              title: 'Email',
              content: 'info@carspa.com',
              link: 'mailto:info@carspa.com'
            },
            {
              icon: MapPinIcon,
              title: 'Address',
              content: '123 Detailing Street, CA 90210',
              link: 'https://maps.google.com'
            },
            {
              icon: ClockIcon,
              title: 'Working Hours',
              content: 'Mon-Sat: 9AM - 6PM',
            }
          ].map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center p-6"
            >
              <item.icon className="h-8 w-8 text-gold mx-auto mb-4" />
              <h3 className="font-playfair text-xl mb-2">{item.title}</h3>
              {item.link ? (
                <a
                  href={item.link}
                  className="text-zinc-600 hover:text-gold transition-colors"
                >
                  {item.content}
                </a>
              ) : (
                <p className="text-zinc-600">{item.content}</p>
              )}
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <button className="bg-gradient-to-r from-gold to-amber-500 text-white px-8 py-3 rounded-md hover:from-amber-500 hover:to-gold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
            Book Your Appointment
          </button>
        </motion.div>
      </div>
    </section>
  );
} 