'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

export default function ServicesHero() {
  return (
    <section className="relative py-20 bg-gradient-to-r from-concrete-gray to-steel-blue text-white">
      <div className="absolute inset-0 bg-black/30" />
      <div className="relative max-w-7xl mx-auto px-4 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-6xl font-heading mb-6"
        >
          Our Services
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto"
        >
          From driveways to decorative finishes, we deliver premium concrete solutions
          that combine craftsmanship, durability, and style.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <Button size="lg" className="bg-safety-orange hover:bg-safety-orange/90 text-white px-8 py-4 text-lg">
            Get Free Estimate
          </Button>
        </motion.div>
      </div>
    </section>
  );
}