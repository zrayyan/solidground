'use client';

import { motion } from 'framer-motion';
import { Calendar, Award, Users, Truck, Building } from 'lucide-react';

const timelineEvents = [
  {
    year: '1999',
    title: 'Company Founded',
    description: 'SolidGround Concrete Solutions established by John and Mary Anderson with a single truck and a commitment to quality.',
    icon: Building,
  },
  {
    year: '2005',
    title: 'First Major Expansion',
    description: 'Added stamped concrete services and expanded our service area to cover 75 miles.',
    icon: Truck,
  },
  {
    year: '2010',
    title: 'Industry Recognition',
    description: 'Received BBB Torch Award for Marketplace Ethics and earned "Super Service" status on Angi.',
    icon: Award,
  },
  {
    year: '2015',
    title: 'Team Growth',
    description: 'Expanded to 15 full-time employees and invested in advanced equipment including laser screeds.',
    icon: Users,
  },
  {
    year: '2020',
    title: 'Technology Integration',
    description: 'Implemented 3D design software and digital project management systems for better precision.',
    icon: Calendar,
  },
  {
    year: '2024',
    title: '25th Anniversary',
    description: 'Celebrating 500+ completed projects and maintaining our position as the area\'s premier concrete specialist.',
    icon: Award,
  },
];

export default function CompanyTimeline() {
  return (
    <section className="py-20 bg-off-white">
      <div className="max-w-7xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-3xl font-heading text-center mb-16 text-charcoal"
        >
          Our Journey
        </motion.h2>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-safety-orange hidden md:block" />

          <div className="space-y-12">
            {timelineEvents.map((event, index) => (
              <motion.div
                key={event.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } flex-col md:gap-8`}
              >
                {/* Year Badge */}
                <div className="flex-shrink-0 w-20 h-20 bg-safety-orange rounded-full flex items-center justify-center mb-4 md:mb-0 z-10">
                  <span className="text-white font-heading font-bold">{event.year}</span>
                </div>

                {/* Content */}
                <div className={`flex-1 bg-white rounded-lg shadow-md p-6 ${
                  index % 2 === 0 ? 'md:text-right' : 'md:text-left'
                }`}>
                  <div className="flex items-center gap-3 mb-3">
                    <event.icon className="w-6 h-6 text-safety-orange" />
                    <h3 className="text-xl font-semibold text-charcoal">{event.title}</h3>
                  </div>
                  <p className="text-gray-600">{event.description}</p>
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