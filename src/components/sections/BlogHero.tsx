'use client';

import { motion } from 'framer-motion';
import { BookOpen, Lightbulb, TrendingUp, Wrench } from 'lucide-react';

const categories = [
  { icon: Wrench, name: 'Maintenance Tips', count: '12 articles' },
  { icon: Lightbulb, name: 'Design Trends', count: '8 articles' },
  { icon: BookOpen, name: 'Technical Guides', count: '15 articles' },
  { icon: TrendingUp, name: 'Project Spotlights', count: '6 articles' },
];

export default function BlogHero() {
  return (
    <section className="relative py-20 bg-gradient-to-r from-concrete-gray to-steel-blue text-white">
      <div className="absolute inset-0 bg-black/30" />
      <div className="relative max-w-7xl mx-auto px-4 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-heading mb-6"
        >
          Concrete Care Blog
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto"
        >
          Expert insights, maintenance tips, and the latest trends in concrete craftsmanship.
          Your comprehensive guide to all things concrete.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
        >
          {categories.map((category, index) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center"
            >
              <category.icon className="w-8 h-8 text-safety-orange mx-auto mb-3" />
              <h3 className="font-semibold mb-1">{category.name}</h3>
              <p className="text-sm text-gray-300">{category.count}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}