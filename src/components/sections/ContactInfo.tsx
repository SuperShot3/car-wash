'use client';

import { motion } from 'framer-motion';
import { PhoneIcon, EnvelopeIcon, MapPinIcon, ClockIcon } from '@heroicons/react/24/outline';

const ContactInfo = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-playfair mb-8">Contact Information</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-2">Address</h3>
              <p>123 Car Wash Street, City, Country</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Phone</h3>
              <p>+1 234 567 8900</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Email</h3>
              <p>info@carwash.com</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Working Hours</h3>
              <p>Monday - Sunday: 9:00 AM - 6:00 PM</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo; 