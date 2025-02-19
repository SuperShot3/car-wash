import ServiceDetails from '@/components/sections/ServiceDetails';

export default function ServicePage({ params }: { params: { service: string } }) {
  return <ServiceDetails service={params.service} />;
} 