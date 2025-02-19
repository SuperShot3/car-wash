import AboutContent from '@/components/sections/AboutContent';
import MapSection from '@/components/sections/MapSection';
import ContactInfo from '@/components/sections/ContactInfo';
import Image from 'next/image';

export default function AboutPage() {
  return (
    <div className="pt-20">
      <AboutContent />
      <MapSection />
      <ContactInfo />
      <Image
        src="/car-wash/images/facility.png"
        alt="About Us"
      />
    </div>
  );
} 