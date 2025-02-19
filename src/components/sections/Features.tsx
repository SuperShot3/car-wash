'use client';

import { motion } from 'framer-motion';
import { CheckCircleIcon, SparklesIcon, ClockIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';

const features = [
  {
    icon: CheckCircleIcon,
    title: 'Premium Service',
    description: 'We use only the finest products and techniques',
    image: "/car-wash/images/features/premium.png",
  },
  {
    icon: SparklesIcon,
    title: 'Expert Team',
    description: 'Our team of certified professionals ensures excellence',
    image: "/car-wash/images/features/team.jpg",
  },
  {
    icon: ClockIcon,
    title: 'Time Efficient',
    description: 'Quick service without compromising quality',
  },
];

export default function Features() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container-custom">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-playfair text-center mb-12"
        >
          Why Choose Us
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="text-center"
            >
              <Image
                src="/car-wash/images/features/feature-1.png"
                alt="Feature"
                width={400}
                height={300}
              />
              <h3 className="text-xl font-playfair mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 