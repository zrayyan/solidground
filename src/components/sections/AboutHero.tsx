'use client';

import { motion } from 'framer-motion';
import { Award, Users, Truck, Shield } from 'lucide-react';

const stats = [
  { icon: Award, label: 'Years of Experience', value: '25+' },
  { icon: Users, label: 'Projects Completed', value: '500+' },
  { icon: Truck, label: 'Equipment Fleet', value: '15+' },
  { icon: Shield, label: 'Certified Professionals', value: '100%' },
];

export default function AboutHero() {
  return (
    <section className="relative py-20 bg-gradient-to-r from-concrete-gray to-steel-blue text-white overflow-hidden">
      <div className="absolute inset-0 bg-black/30" />
      <div className="relative max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-heading mb-6">
              Building Dreams,<br />
              <span className="text-safety-orange">One Pour at a Time</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200">
              Since 1999, SolidGround Concrete Solutions has been the trusted name in premium concrete craftsmanship.
              We combine traditional techniques with modern technology to deliver exceptional results.
            </p>
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <stat.icon className="w-8 h-8 text-safety-orange mx-auto mb-2" />
                  <div className="text-3xl font-heading mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-300">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-square bg-white/10 backdrop-blur-sm rounded-lg p-8 flex items-center justify-center">
              <div className="text-center">
                <div className="w-32 h-32 bg-safety-orange rounded-full flex items-center justify-center mx-auto mb-6">
                  <Shield className="w-16 h-16 text-white" />
                </div>
                <h3 className="text-2xl font-heading mb-4">Our Promise</h3>
                <p className="text-gray-200">
                  Quality craftsmanship, honest pricing, and lifetime warranty on all our work.
                  Your satisfaction is our foundation.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}