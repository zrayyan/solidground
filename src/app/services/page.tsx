import { Metadata } from 'next';
import ServicesHero from '@/components/sections/ServicesHero';
import ServicesGrid from '@/components/sections/ServicesGrid';

export const metadata: Metadata = {
  title: 'Concrete Services | SolidGround Concrete Solutions',
  description: 'Professional concrete services including driveways, patios, stamped concrete, repairs, and more. Free estimates available.',
};

export default function ServicesPage() {
  return (
    <main>
      <ServicesHero />
      <ServicesGrid />
    </main>
  );
}