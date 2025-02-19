'use client';

import { FC, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ServiceType, VehicleType } from '@/types';
import { useSearchParams } from 'next/navigation';

interface FormData {
  name: string;
  email: string;
  phone: string;
  service: ServiceType;
  vehicleType: VehicleType;
  isExteriorOnly: boolean;
  preferredDate: string;
  preferredTime: string;
  message: string;
}

interface ContactFormProps {
  preselectedService?: ServiceType;
}

const ContactForm: FC<ContactFormProps> = ({ preselectedService }) => {
  const searchParams = useSearchParams();
  const serviceFromUrl = searchParams.get('service') as ServiceType | null;

  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    service: preselectedService || serviceFromUrl || 'Basic Wash',
    vehicleType: 'Small Car',
    isExteriorOnly: true,
    preferredDate: '',
    preferredTime: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);

  // Обновляем сервис при изменении URL параметров
  useEffect(() => {
    if (serviceFromUrl) {
      setFormData(prev => ({
        ...prev,
        service: serviceFromUrl
      }));
    }
  }, [serviceFromUrl]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Здесь будет API запрос для отправки формы
      await new Promise(resolve => setTimeout(resolve, 1000)); // Имитация запроса
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: 'Basic Wash',
        vehicleType: 'Small Car',
        isExteriorOnly: true,
        preferredDate: '',
        preferredTime: '',
        message: '',
      });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-20 bg-zinc-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl font-playfair mb-4">Book Your Service</h2>
            <p className="text-zinc-600">Schedule your car care service with us</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6 bg-white p-8 rounded-lg shadow-lg">
            {/* Основная информация */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent"
                />
              </div>
            </div>

            {/* Выбор услуги и типа автомобиля */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Service Type *
                </label>
                <select
                  required
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value as ServiceType })}
                  className="w-full px-4 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent"
                >
                  {['Basic Wash', 'Deluxe Wash', 'Premium Detail'].map((service) => (
                    <option key={service} value={service}>{service}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Vehicle Type *
                </label>
                <select
                  required
                  value={formData.vehicleType}
                  onChange={(e) => setFormData({ ...formData, vehicleType: e.target.value as VehicleType })}
                  className="w-full px-4 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent"
                >
                  {['Small Car', 'Medium Car', 'Large Car', 'Motorcycle'].map((type) => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Выбор даты и времени */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Preferred Date *
                </label>
                <input
                  type="date"
                  required
                  min={new Date().toISOString().split('T')[0]}
                  value={formData.preferredDate}
                  onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Preferred Time *
                </label>
                <select
                  required
                  value={formData.preferredTime}
                  onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent"
                >
                  <option value="">Select time</option>
                  {['09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00'].map((time) => (
                    <option key={time} value={time}>{time}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Дополнительные опции */}
            <div>
              <label className="flex items-center space-x-3">
                <input
                  type="checkbox"
                  checked={formData.isExteriorOnly}
                  onChange={(e) => setFormData({ ...formData, isExteriorOnly: e.target.checked })}
                  className="h-4 w-4 text-gold focus:ring-gold border-gray-300 rounded"
                />
                <span className="text-sm text-gray-700">Exterior Only</span>
              </label>
            </div>

            {/* Сообщение */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Additional Notes
              </label>
              <textarea
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                rows={4}
                className="w-full px-4 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent"
              />
            </div>

            {/* Статус отправки */}
            {submitStatus && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className={`p-4 rounded-md ${
                  submitStatus === 'success' 
                    ? 'bg-green-50 text-green-800' 
                    : 'bg-red-50 text-red-800'
                }`}
              >
                {submitStatus === 'success'
                  ? 'Thank you! Your booking request has been sent. We will contact you shortly.'
                  : 'There was an error submitting your request. Please try again.'}
              </motion.div>
            )}

            {/* Кнопка отправки */}
            <div className="text-center">
              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-gradient-to-r from-gold to-amber-500 text-white px-8 py-3 rounded-md hover:from-amber-500 hover:to-gold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Sending...' : 'Book Now'}
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactForm;