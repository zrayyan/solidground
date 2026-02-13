import { Metadata } from 'next';
import AboutHero from '@/components/sections/AboutHero';
import CompanyTimeline from '@/components/sections/CompanyTimeline';
import TeamSection from '@/components/sections/TeamSection';
import EquipmentSection from '@/components/sections/EquipmentSection';

export const metadata: Metadata = {
  title: 'About Us | SolidGround Concrete Solutions',
  description: 'Learn about our 25+ years of concrete expertise, our dedicated team, and our commitment to quality craftsmanship in residential and commercial projects.',
};

export default function AboutPage() {
  return (
    <main>
      <AboutHero />
      <CompanyTimeline />
      <TeamSection />
      <EquipmentSection />
    </main>
  );
}