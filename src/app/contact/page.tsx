import { Metadata } from 'next';
import ContactHero from '@/components/sections/ContactHero';
import ContactForm from '@/components/forms/ContactForm';
import ContactInfo from '@/components/sections/ContactInfo';

export const metadata: Metadata = {
  title: 'Contact Us | SolidGround Concrete Solutions',
  description: 'Get in touch for your concrete project needs. Free estimates, emergency repairs, and expert consultation available 24/7.',
};

export default function ContactPage() {
  return (
    <main>
      <ContactHero />
      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <ContactForm />
          <ContactInfo />
        </div>
      </div>
    </main>
  );
}