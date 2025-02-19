import AboutContent from '@/components/sections/AboutContent';
import MapSection from '@/components/sections/MapSection';
import ContactInfo from '@/components/sections/ContactInfo';

export default function AboutPage() {
  return (
    <div className="pt-20">
      <AboutContent />
      <MapSection />
      <ContactInfo />
    </div>
  );
} 