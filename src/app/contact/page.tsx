import ContactForm from '@/components/ContactForm';
import ContactInfo from '@/components/sections/ContactInfo';
import { ServiceType } from '@/types';

// Добавляем generateStaticParams для статической генерации
export function generateStaticParams() {
  return [
    { service: 'Basic Wash' },
    { service: 'Deluxe Wash' },
    { service: 'Premium Detail' },
    { service: undefined }, // Для случая без параметра
  ];
}

// Изменяем тип props
interface ContactPageProps {
  searchParams?: {
    service?: ServiceType;
  };
}

export default function ContactPage({ searchParams = {} }: ContactPageProps) {
  return (
    <div className="pt-20">
      <ContactForm preselectedService={searchParams.service} />
      <ContactInfo />
    </div>
  );
} 