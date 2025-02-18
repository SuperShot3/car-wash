'use client';

import { motion } from 'framer-motion';

const services = [
  {
    type: 'Small Cars (Sedan/Hatchback)',
    prices: [
      { service: 'Basic Wash', exterior: 30, full: 45 },
      { service: 'Deluxe Wash', exterior: 50, full: 75 },
      { service: 'Premium Detail', exterior: null, full: 150 },
    ],
  },
  {
    type: 'Medium Cars (SUV/Crossover)',
    prices: [
      { service: 'Basic Wash', exterior: 40, full: 60 },
      { service: 'Deluxe Wash', exterior: 65, full: 90 },
      { service: 'Premium Detail', exterior: null, full: 180 },
    ],
  },
  {
    type: 'Large Cars (Van/Truck)',
    prices: [
      { service: 'Basic Wash', exterior: 50, full: 75 },
      { service: 'Deluxe Wash', exterior: 80, full: 110 },
      { service: 'Premium Detail', exterior: null, full: 220 },
    ],
  },
  {
    type: 'Motorcycles',
    prices: [
      { service: 'Basic Wash', exterior: 25, full: null },
      { service: 'Deluxe Wash', exterior: 40, full: null },
      { service: 'Premium Detail', exterior: 100, full: null },
    ],
  },
];

export default function PricingTable() {
  return (
    <section className="py-20 bg-zinc-50" id="pricing">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-playfair mb-4">Our Pricing</h2>
          <p className="text-zinc-600">Transparent pricing for all vehicle types</p>
        </motion.div>

        <div className="space-y-8">
          {services.map((vehicleType, index) => (
            <motion.div
              key={vehicleType.type}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <div className="bg-gradient-to-r from-gold to-amber-500 p-4">
                <h3 className="text-xl font-semibold text-white">{vehicleType.type}</h3>
              </div>
              <div className="p-4">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-left py-2">Service</th>
                      <th className="text-right py-2">Exterior Only</th>
                      <th className="text-right py-2">Interior + Exterior</th>
                    </tr>
                  </thead>
                  <tbody>
                    {vehicleType.prices.map((price) => (
                      <tr key={price.service} className="border-b border-gray-100">
                        <td className="py-3">{price.service}</td>
                        <td className="text-right py-3">
                          {price.exterior ? `$${price.exterior}` : '-'}
                        </td>
                        <td className="text-right py-3">
                          {price.full ? `$${price.full}` : '-'}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-8 text-center"
        >
          <p className="text-sm text-zinc-500">
            * Prices may vary based on vehicle condition and additional services required
          </p>
        </motion.div>
      </div>
    </section>
  );
} 