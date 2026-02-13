import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import ServiceDetail from '@/components/sections/ServiceDetail';
import { getServiceBySlug } from '@/lib/services';

export const metadata: Metadata = {
  title: 'Stamped Concrete | SolidGround Concrete Solutions',
  description: 'Beautiful stamped concrete solutions that mimic natural stone, brick, and other materials. Central Florida experts.',
  keywords: 'stamped concrete, decorative concrete, concrete stamping, Central Florida, stone look concrete',
  openGraph: {
    title: 'Stamped Concrete | SolidGround Concrete Solutions',
    description: 'Create stunning decorative concrete surfaces that look like natural stone or brick in Central Florida.',
    type: 'website',
  },
};

export default function StampedConcretePage() {
  const service = getServiceBySlug('stamped-concrete');

  if (!service) {
    notFound();
  }

  return <ServiceDetail service={service} />;
}