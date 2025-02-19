import ContactForm from '@/components/sections/ContactForm';
import ContactInfo from '@/components/sections/ContactInfo';
import { ServiceType } from '@/types';

// Добавляем маркер для статической страницы
export const dynamic = 'force-static';

export default function ContactPage() {
  return (
    <div className="pt-20">
      <ContactForm />
      <ContactInfo />
    </div>
  );
} 