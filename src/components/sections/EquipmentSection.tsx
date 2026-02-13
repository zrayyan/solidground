'use client';

import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Truck, Wrench, Zap, Shield } from 'lucide-react';

const equipment = [
  {
    name: 'Concrete Mixer Trucks',
    description: 'State-of-the-art mixer trucks for precise concrete delivery',
    specs: ['5-10 cubic yard capacity', 'GPS tracking', 'Automated mixing'],
    icon: Truck,
  },
  {
    name: 'Laser Screeds',
    description: 'Advanced laser-guided screed for perfectly level surfaces',
    specs: ['±1/16" accuracy', 'Up to 40 ft width', 'Wireless control'],
    icon: Zap,
  },
  {
    name: 'Stamping Tools',
    description: 'Professional-grade stamping equipment for decorative concrete',
    specs: ['50+ patterns available', 'Custom design capability', 'Heavy-duty construction'],
    icon: Wrench,
  },
  {
    name: 'Safety Equipment',
    description: 'OSHA-compliant safety gear and monitoring systems',
    specs: ['Personal protective equipment', 'Site monitoring', 'Emergency response'],
    icon: Shield,
  },
];

export default function EquipmentSection() {
  return (
    <section className="py-20 bg-charcoal">
      <div className="max-w-7xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-3xl font-heading text-center mb-16 text-off-white"
        >
          Our Equipment
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {equipment.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full bg-white">
                <CardHeader>
                  <div className="w-12 h-12 bg-safety-orange rounded-lg flex items-center justify-center mb-4">
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-charcoal">{item.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{item.description}</p>
                  <ul className="space-y-1">
                    {item.specs.map(spec => (
                      <li key={spec} className="text-sm text-gray-500 flex items-center">
                        <div className="w-1.5 h-1.5 bg-safety-orange rounded-full mr-2" />
                        {spec}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mt-16"
        >
          <h3 className="text-2xl font-heading mb-4 text-off-white">Industry Certifications</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              'OSHA Certified',
              'BBB A+ Rating',
              'Angi Super Service',
              'ACI Member'
            ].map(cert => (
              <div key={cert} className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <p className="text-off-white font-medium">{cert}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}