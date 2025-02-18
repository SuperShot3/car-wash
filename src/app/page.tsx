import Hero from '@/components/sections/Hero';
import Services from '@/components/sections/Services';
import Features from '@/components/sections/Features';
import PricingTable from '@/components/sections/PricingTable';
import MapSection from '@/components/sections/MapSection';

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Features />
      <PricingTable />
      <MapSection />
    </>
  );
} 