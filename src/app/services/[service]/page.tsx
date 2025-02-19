import ServiceDetails from '@/components/sections/ServiceDetails';

export function generateStaticParams() {
  return [
    { service: 'basic-wash' },
    { service: 'deluxe-wash' },
    { service: 'premium-detail' }
  ];
}

export default function ServicePage({ params }: { params: { service: string } }) {
  return <ServiceDetails service={params.service} />;
} 