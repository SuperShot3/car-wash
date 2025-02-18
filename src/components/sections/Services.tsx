'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { ServiceType } from '@/types/services';

const services: { title: ServiceType; description: string; image: string }[] = [
  {
    title: 'Basic Wash',
    description: 'Complete exterior wash and basic interior cleaning',
    image: '/images/services/detailing.png',
  },
  {
    title: 'Deluxe Wash',
    description: 'Premium wash with wax protection and interior detailing',
    image: '/images/services/paint.png',
  },
  {
    title: 'Premium Detail',
    description: 'Full detail service with ceramic coating and paint correction',
    image: '/images/services/interior.png',
  },
];

export default function Services() {
  const router = useRouter();

  const handleBooking = (service: ServiceType) => {
    router.push(`/contact?service=${encodeURIComponent(service)}`);
  };

  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-playfair text-center mb-12"
        >
          Our Premium Services
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden group"
            >
              <div className="relative w-full h-[240px]">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-playfair mb-2">{service.title}</h3>
                <p className="text-zinc-600 mb-4">{service.description}</p>
                <div className="flex space-x-4">
                  <Link 
                    href={`/services/${encodeURIComponent(service.title)}`}
                    className="text-gold hover:text-amber-500 transition-colors flex items-center"
                  >
                    Learn More
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                  <button 
                    onClick={() => handleBooking(service.title)}
                    className="bg-gradient-to-r from-gold to-amber-500 text-white px-6 py-2.5 rounded-md hover:from-amber-500 hover:to-gold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                  >
                    Book Now
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 