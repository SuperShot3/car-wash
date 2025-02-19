import ServiceDetails from '@/components/sections/ServiceDetails';

export default function ServiceDetailsPage({ params }: { params: { service: string } }) {
  return <ServiceDetails service={params.service} />;
} 