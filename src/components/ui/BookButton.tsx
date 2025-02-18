'use client';

import { useRouter } from 'next/navigation';
import { ServiceType } from '@/types/services';

interface BookButtonProps {
  service?: ServiceType;
  className?: string;
}

export default function BookButton({ service, className }: BookButtonProps) {
  const router = useRouter();

  const handleBooking = () => {
    const url = service 
      ? `/contact?service=${encodeURIComponent(service)}`
      : '/contact';
    router.push(url);
  };

  return (
    <button
      onClick={handleBooking}
      className={className || "bg-gradient-to-r from-gold to-amber-500 text-white px-6 py-2.5 rounded-md hover:from-amber-500 hover:to-gold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"}
    >
      Book Now
    </button>
  );
} 