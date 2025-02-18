import ContactForm from '@/components/sections/ContactForm';
import ContactInfo from '@/components/sections/ContactInfo';
import { ServiceType } from '@/types/services';

export default function ContactPage({ searchParams }: { searchParams: { service?: string } }) {
  return (
    <div className="pt-20">
      <ContactForm preselectedService={searchParams.service as ServiceType} />
      <ContactInfo />
    </div>
  );
} 