import { Metadata } from 'next';
import Hero from '@/components/sections/Hero';
import TrustBar from '@/components/sections/TrustBar';
import ServicesShowcase from '@/components/sections/ServicesShowcase';
import ServiceAreaMap from '@/components/sections/ServiceAreaMap';
import ProjectGallery from '@/components/sections/ProjectGallery';
import ProcessTimeline from '@/components/sections/ProcessTimeline';

export const metadata: Metadata = {
  title: 'SolidGround Concrete Solutions | Expert Concrete Services',
  description: 'Professional concrete contractor serving Central Florida. Driveways, patios, foundations, and decorative concrete in Orlando, Tampa, Daytona Beach, and surrounding areas. Free estimates, 20+ years experience, licensed & insured.',
  keywords: 'concrete contractor, driveway installation, patio construction, foundation repair, decorative concrete, concrete repair',
  openGraph: {
    title: 'SolidGround Concrete Solutions | Expert Concrete Services',
    description: 'Professional concrete contractor with 20+ years experience. Free estimates for driveways, patios, foundations, and decorative concrete throughout Central Florida.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SolidGround Concrete Solutions',
    description: 'Expert concrete services with 20+ years experience. Free estimates available.',
  },
};

export default function Home() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "SolidGround Concrete Solutions",
    "description": "Professional concrete contractor specializing in driveways, patios, foundations, and decorative concrete",
    "url": "https://solidground.com",
    "telephone": "(555) 123-CONCRETE",
    "email": "info@solidground.com",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Central Florida",
      "addressRegion": "FL",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "40.7128",
      "longitude": "-74.0060"
    },
    "openingHours": [
      "Mo-Fr 07:00-18:00",
      "Sa 08:00-16:00"
    ],
    "serviceType": [
      "Concrete Contractor",
      "Driveway Installation",
      "Patio Construction",
      "Foundation Repair",
      "Decorative Concrete"
    ],
    "priceRange": "$$",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "150"
    }
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <Hero />
      <TrustBar />
      <ServicesShowcase />
      <ServiceAreaMap />
      <ProjectGallery />
      <ProcessTimeline />
    </main>
  );
}
