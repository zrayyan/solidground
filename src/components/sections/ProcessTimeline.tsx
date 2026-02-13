'use client';

import { motion } from 'framer-motion';
import { CheckCircle, Clock, Truck, Wrench, Paintbrush, Shield } from 'lucide-react';

const steps = [
  {
    icon: CheckCircle,
    title: 'Consultation',
    description: 'Free on-site assessment and design consultation',
    duration: '1-2 days'
  },
  {
    icon: Clock,
    title: 'Design & Planning',
    description: 'Custom design creation and material selection',
    duration: '3-5 days'
  },
  {
    icon: Truck,
    title: 'Preparation',
    description: 'Site preparation and form installation',
    duration: '1 day'
  },
  {
    icon: Wrench,
    title: 'Pour & Finish',
    description: 'Concrete pouring and initial finishing',
    duration: '1-2 days'
  },
  {
    icon: Paintbrush,
    title: 'Curing & Sealing',
    description: 'Proper curing time and protective sealing',
    duration: '7-28 days'
  },
  {
    icon: Shield,
    title: 'Warranty',
    description: 'Lifetime warranty and maintenance support',
    duration: 'Lifetime'
  },
];

export default function ProcessTimeline() {
  return (
    <section className="py-20 bg-charcoal">
      <div className="max-w-7xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl font-heading text-center mb-16 text-off-white"
        >
          Our Process
        </motion.h2>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-safety-orange hidden md:block" />

          <div className="space-y-12">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } flex-col md:gap-8`}
              >
                {/* Icon */}
                <div className="flex-shrink-0 w-16 h-16 bg-safety-orange rounded-full flex items-center justify-center mb-4 md:mb-0">
                  <step.icon className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <div className={`flex-1 text-center md:text-left ${
                  index % 2 === 0 ? 'md:text-right' : 'md:text-left'
                }`}>
                  <h3 className="text-xl font-semibold text-off-white mb-2">{step.title}</h3>
                  <p className="text-gray-300 mb-2">{step.description}</p>
                  <span className="text-safety-orange font-medium">{step.duration}</span>
                </div>

                {/* Spacer for timeline */}
                <div className="hidden md:block w-16" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}