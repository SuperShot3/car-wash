import { ContactForm } from '@/components/ContactForm';
import { ContactInfo } from '@/components/ContactInfo';
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