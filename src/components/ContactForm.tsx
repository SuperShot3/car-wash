'use client';

import { useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

export default function ContactForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const selectedService = searchParams.get('service');

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: selectedService || '',
    message: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Здесь будет логика отправки формы
    console.log('Form submitted:', formData);
  };

  return (
    <section className="py-20">
      <div className="container-custom max-w-3xl">
        <h1 className="text-4xl font-playfair text-center mb-8">Contact Us</h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              type="text"
              placeholder="Your Name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full p-3 border border-gray-300 rounded-md"
              required
            />
            <input
              type="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full p-3 border border-gray-300 rounded-md"
              required
            />
          </div>
          <input
            type="tel"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            className="w-full p-3 border border-gray-300 rounded-md"
            required
          />
          <select
            value={formData.service}
            onChange={(e) => setFormData({ ...formData, service: e.target.value })}
            className="w-full p-3 border border-gray-300 rounded-md"
            required
          >
            <option value="">Select Service</option>
            <option value="Basic Wash">Basic Wash</option>
            <option value="Deluxe Wash">Deluxe Wash</option>
            <option value="Premium Detail">Premium Detail</option>
          </select>
          <textarea
            placeholder="Your Message"
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            className="w-full p-3 border border-gray-300 rounded-md h-32"
            required
          />
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-gold to-amber-500 text-white py-3 rounded-md hover:from-amber-500 hover:to-gold transition-all duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
} 