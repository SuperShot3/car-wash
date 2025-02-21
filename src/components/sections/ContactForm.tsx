'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';

type FormData = {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
};

const initialFormData: FormData = {
  name: '',
  email: '',
  phone: '',
  service: '',
  message: '',
};

export default function ContactForm() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Здесь будет API запрос для отправки формы
      await new Promise(resolve => setTimeout(resolve, 1000)); // Имитация запроса
      setSubmitStatus('success');
      setFormData(initialFormData);
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-zinc-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl font-playfair mb-4">{t('contact.title')}</h2>
            <p className="text-zinc-600">{t('contact.form.message')}</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6 bg-white p-8 rounded-lg shadow-lg">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {t('contact.form.name')} *
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
                  {t('contact.form.email')} *
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

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {t('contact.form.phone')} *
              </label>
              <input
                type="tel"
                required
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full px-4 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {t('contact.form.service')} *
              </label>
              <select
                required
                value={formData.service}
                onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                className="w-full px-4 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent"
              >
                <option value="">{t('contact.form.selectService')}</option>
                <option value="basic">{t('services.basic.title')}</option>
                <option value="deluxe">{t('services.deluxe.title')}</option>
                <option value="premium">{t('services.premium.title')}</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {t('contact.form.message')}
              </label>
              <textarea
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                rows={4}
                className="w-full px-4 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent"
              />
            </div>

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
                  ? t('contact.form.success')
                  : t('contact.form.error')}
              </motion.div>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gold hover:bg-amber-600 text-white py-3 rounded-md transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? t('contact.form.sending') : t('contact.form.submit')}
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
} 