'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function AboutContent() {
  return (
    <section className="py-20">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-playfair mb-6">About Car Spa</h1>
          <p className="text-xl text-zinc-600">
            Delivering excellence in automotive care since 2015
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/car-wash/images/about/facility.png"
                alt="About Our Car Wash"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-playfair">Our Story</h2>
            <p className="text-zinc-600">
              Founded with a passion for automotive excellence, Car Spa has grown to become a leading name in premium car care services. Our commitment to quality and attention to detail has earned us the trust of countless satisfied customers.
            </p>
            <p className="text-zinc-600">
              We combine traditional detailing expertise with cutting-edge technology and premium products to deliver outstanding results for every vehicle we service.
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {[
            { number: '5000+', label: 'Satisfied Clients' },
            { number: '8+', label: 'Years Experience' },
            { number: '100%', label: 'Quality Guarantee' },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="text-center p-6 bg-zinc-50 rounded-lg"
            >
              <div className="text-4xl font-playfair text-gold mb-2">{stat.number}</div>
              <div className="text-zinc-600">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 