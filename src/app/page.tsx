import Hero from '@/components/sections/Hero';
import Services from '@/components/sections/Services';
import Features from '@/components/sections/Features';
import PricingTable from '@/components/sections/PricingTable';
import AboutContent from '@/components/sections/AboutContent';
import MapSection from '@/components/sections/MapSection';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Hero />
      <Services />
      <AboutContent />
      <Features />
      <PricingTable />
      <MapSection />
    </main>
  );
} 