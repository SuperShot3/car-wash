'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { ServiceType } from '@/types/services';

type ServiceDetail = {
  title: ServiceType;
  description: string;
  features: string[];
  image: string;
  price: {
    basic: number;
    full: number;
  };
};

const serviceDetails: Record<ServiceType, ServiceDetail> = {
  'Basic Wash': {
    title: 'Basic Wash',
    description: 'Complete exterior wash and basic interior cleaning',
    features: [
      'Exterior hand wash',
      'Wheel cleaning',
      'Basic interior vacuum',
      'Window cleaning',
    ],
    image: '/car-wash/images/services/detailing.png',
    price: {
      basic: 30,
      full: 45,
    },
  },
  'Deluxe Wash': {
    title: 'Deluxe Wash',
    description: 'Premium wash with wax protection and interior detailing',
    features: [
      'Everything in Basic Wash',
      'Wax protection',
      'Tire dressing',
      'Interior wipe down',
      'Air freshener',
    ],
    image: '/car-wash/images/services/paint.png',
    price: {
      basic: 50,
      full: 75,
    },
  },
  'Premium Detail': {
    title: 'Premium Detail',
    description: 'Full detail service with ceramic coating and paint correction',
    features: [
      'Everything in Deluxe Wash',
      'Paint correction',
      'Ceramic coating',
      'Deep interior cleaning',
      'Leather conditioning',
      'Engine bay cleaning',
    ],
    image: '/car-wash/images/services/interior.png',
    price: {
      basic: 150,
      full: 220,
    },
  },
};

interface ServiceDetailsProps {
  service: string;
}

export default function ServiceDetails({ service }: ServiceDetailsProps) {
  const formattedService = service.split('-').map(word => 
    word.charAt(0).toUpperCase() + word.slice(1)
  ).join(' ');

  const router = useRouter();
  const details = serviceDetails[formattedService as ServiceType];

  if (!details) {
    return (
      <section className="py-20 bg-zinc-50">
        <div className="container-custom text-center">
          <h1 className="text-4xl font-playfair mb-4">Service Not Found</h1>
          <p className="text-zinc-600 mb-8">The requested service does not exist.</p>
          <button
            onClick={() => router.push('/services')}
            className="bg-gradient-to-r from-gold to-amber-500 text-white px-8 py-3 rounded-md hover:from-amber-500 hover:to-gold transition-all duration-300"
          >
            Back to Services
          </button>
        </div>
      </section>
    );
  }

  const handleBooking = () => {
    router.push(`/contact?service=${encodeURIComponent(formattedService)}`);
  };

  return (
    <section className="py-20 bg-zinc-50">
      <div className="container-custom">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            {/* Изображение */}
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src={details.image}
                alt={details.title}
                fill
                className="object-cover"
              />
            </div>

            {/* Информация */}
            <div className="space-y-6">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-4xl font-playfair"
              >
                {formattedService}
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-zinc-600"
              >
                {details.description}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="space-y-4"
              >
                <h3 className="text-xl font-semibold">Features:</h3>
                <ul className="space-y-2">
                  {details.features.map((feature, index) => (
                    <li key={index} className="flex items-center space-x-2">
                      <span className="w-2 h-2 bg-gold rounded-full" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="space-y-4"
              >
                <h3 className="text-xl font-semibold">Pricing:</h3>
                <div className="space-y-2">
                  <p>Exterior Only: ${details.price.basic}</p>
                  <p>Interior + Exterior: ${details.price.full}</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <button
                  onClick={handleBooking}
                  className="bg-gradient-to-r from-gold to-amber-500 text-white px-8 py-3 rounded-md hover:from-amber-500 hover:to-gold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                >
                  Book Now
                </button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 