import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import ServiceDetail from '@/components/sections/ServiceDetail';
import { getServiceBySlug } from '@/lib/services';

export const metadata: Metadata = {
  title: 'Driveways & Walkways | SolidGround Concrete Solutions',
  description: 'Custom concrete driveways and walkways with various finishes and patterns. Professional installation in Central Florida.',
  keywords: 'driveway installation, walkway construction, concrete driveway, stamped concrete walkway, Central Florida',
  openGraph: {
    title: 'Driveways & Walkways | SolidGround Concrete Solutions',
    description: 'Transform your property with premium driveway and walkway solutions in Central Florida.',
    type: 'website',
  },
};

export default function DrivewaysWalkwaysPage() {
  const service = getServiceBySlug('driveways-walkways');

  if (!service) {
    notFound();
  }

  return <ServiceDetail service={service} />;
}