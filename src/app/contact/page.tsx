import ContactForm from '@/components/sections/ContactForm';
import ContactInfo from '@/components/sections/ContactInfo';
import { ServiceType } from '@/types';

interface ContactPageProps {
  searchParams: {
    service?: ServiceType;
  };
}

export default function ContactPage({ searchParams }: ContactPageProps) {
  return (
    <div className="pt-20">
      <ContactForm preselectedService={searchParams.service} />
      <ContactInfo />
    </div>
  );
} 