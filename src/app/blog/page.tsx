import { Metadata } from 'next';
import BlogHero from '@/components/sections/BlogHero';
import BlogGrid from '@/components/sections/BlogGrid';

export const metadata: Metadata = {
  title: 'Concrete Care Blog | SolidGround Concrete Solutions',
  description: 'Expert tips and advice on concrete maintenance, design trends, and project insights. Your go-to resource for all things concrete.',
};

export default function BlogPage() {
  return (
    <main>
      <BlogHero />
      <BlogGrid />
    </main>
  );
}