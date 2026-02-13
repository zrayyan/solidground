'use client';

import { motion } from 'framer-motion';
import { Star, Award, Clock, Shield } from 'lucide-react';

const stats = [
  { icon: Star, label: '500+ Projects Completed', value: '500+' },
  { icon: Award, label: '25+ Years Experience', value: '25+' },
  { icon: Star, label: '4.9★ Google Rating', value: '4.9★' },
  { icon: Shield, label: 'Lifetime Warranty', value: 'Lifetime' },
];

export default function TrustBar() {
  return (
    <section className="bg-charcoal py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center"
            >
              <stat.icon className="w-8 h-8 text-safety-orange mx-auto mb-2" />
              <div className="text-3xl font-heading text-off-white mb-1">{stat.value}</div>
              <div className="text-sm text-gray-300">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}