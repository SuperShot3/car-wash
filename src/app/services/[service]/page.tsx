'use client';

import { useParams, useRouter } from 'next/navigation';
import ServiceDetails from '@/components/sections/ServiceDetails';
import { ServiceType, isValidService } from '@/types/services';
import { useEffect } from 'react';

export default function ServicePage() {
  const params = useParams();
  const router = useRouter();
  const serviceParam = decodeURIComponent(params.service as string);

  useEffect(() => {
    if (!isValidService(serviceParam)) {
      router.push('/services');
    }
  }, [serviceParam, router]);

  if (!isValidService(serviceParam)) {
    return null;
  }

  return (
    <div className="pt-20">
      <ServiceDetails service={serviceParam} />
    </div>
  );
} 