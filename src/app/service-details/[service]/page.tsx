import ServiceDetails from '@/components/sections/ServiceDetails';

// Добавляем функцию generateStaticParams
export function generateStaticParams() {
  return [
    { service: 'basic-wash' },
    { service: 'deluxe-wash' },
    { service: 'premium-detail' }
  ];
}

export default function ServiceDetailsPage({ params }: { params: { service: string } }) {
  return <ServiceDetails service={params.service} />;
} 