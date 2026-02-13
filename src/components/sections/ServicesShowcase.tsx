'use client';

import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Hammer, Stamp, Truck, Wrench } from 'lucide-react';

const services = [
  {
    icon: Hammer,
    title: 'Driveways & Walkways',
    description: 'Premium concrete surfaces that enhance your property',
    category: 'Residential'
  },
  {
    icon: Stamp,
    title: 'Stamped Decorative Concrete',
    description: 'Beautiful patterns that mimic stone, brick, and more',
    category: 'Decorative'
  },
  {
    icon: Truck,
    title: 'Patios & Pool Decks',
    description: 'Outdoor living spaces built to last',
    category: 'Residential'
  },
  {
    icon: Wrench,
    title: 'Concrete Repairs',
    description: 'Expert fixes for cracks, sinkholes, and damage',
    category: 'Structural'
  },
];

export default function ServicesShowcase() {
  return (
    <section className="py-20 bg-off-white">
      <div className="max-w-7xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl font-heading text-center mb-16 text-charcoal"
        >
          Our Services
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <service.icon className="w-12 h-12 text-safety-orange mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2 text-charcoal">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <span className="text-sm text-safety-orange font-medium">{service.category}</span>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}