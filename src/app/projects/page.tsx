import { Metadata } from 'next';
import ProjectsGallery from '@/components/sections/ProjectsGallery';

export const metadata: Metadata = {
  title: 'Our Projects | SolidGround Concrete Solutions',
  description: 'Browse our portfolio of concrete projects including driveways, patios, stamped concrete, and commercial installations. See our craftsmanship in action.',
};

export default function ProjectsPage() {
  return (
    <main>
      <ProjectsGallery />
    </main>
  );
}