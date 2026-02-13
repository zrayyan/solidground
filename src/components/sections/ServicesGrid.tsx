'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Hammer, Stamp, Truck, Wrench, Paintbrush, Shield, ArrowRight } from 'lucide-react';

const services = [
  {
    icon: Hammer,
    title: 'Driveways & Walkways',
    slug: 'driveways-walkways',
    description: 'Custom concrete driveways and walkways with various finishes and patterns.',
    features: ['Stamped concrete', 'Colored concrete', 'Stamped overlays', 'Custom designs'],
    startingPrice: '$12/sq ft'
  },
  {
    icon: Stamp,
    title: 'Stamped Decorative Concrete',
    slug: 'stamped-concrete',
    description: 'Transform ordinary concrete into beautiful stone, brick, or tile patterns.',
    features: ['Brick patterns', 'Stone textures', 'Tile designs', 'Custom stamps'],
    startingPrice: '$15/sq ft'
  },
  {
    icon: Truck,
    title: 'Patios & Pool Decks',
    description: 'Outdoor living spaces that are both beautiful and functional.',
    features: ['Non-slip finishes', 'Decorative borders', 'Lighting integration', 'Water features'],
    startingPrice: '$18/sq ft'
  },
  {
    icon: Wrench,
    title: 'Concrete Repairs',
    description: 'Expert repairs for cracks, sinkholes, and structural issues.',
    features: ['Crack repair', 'Sinkhole filling', 'Foundation repair', 'Structural reinforcement'],
    startingPrice: '$8/sq ft'
  },
  {
    icon: Paintbrush,
    title: 'Epoxy Floor Coatings',
    description: 'Durable, attractive epoxy coatings for garages and commercial spaces.',
    features: ['Decorative flakes', 'Metallic finishes', 'Anti-slip additives', 'UV protection'],
    startingPrice: '$6/sq ft'
  },
  {
    icon: Shield,
    title: 'Sealing & Protection',
    description: 'Protect your investment with professional sealing services.',
    features: ['Penetrating sealers', 'Decorative sealers', 'Anti-slip sealers', 'Maintenance plans'],
    startingPrice: '$2/sq ft'
  },
];

export default function ServicesGrid() {
  return (
    <section className="py-20 bg-off-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-safety-orange rounded-lg flex items-center justify-center mb-4">
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-xl text-charcoal">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <ul className="space-y-1 mb-6">
                    {service.features.map((feature) => (
                      <li key={feature} className="text-sm text-gray-500 flex items-center">
                        <ArrowRight className="w-3 h-3 text-safety-orange mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="flex justify-between items-center">
                    <span className="text-safety-orange font-semibold">{service.startingPrice}</span>
                    {service.slug ? (
                      <Link href={`/services/${service.slug}`}>
                        <Button variant="outline" size="sm">
                          Learn More
                        </Button>
                      </Link>
                    ) : (
                      <Button variant="outline" size="sm">
                        Learn More
                      </Button>
                    )}
                  </div>
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
          <h3 className="text-2xl font-heading mb-4 text-charcoal">Not Sure Which Service You Need?</h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Our experts can help you choose the right concrete solution for your project.
            Schedule a free consultation and we&apos;ll guide you through the options.
          </p>
          <Button size="lg" className="bg-safety-orange hover:bg-safety-orange/90">
            Schedule Free Consultation
          </Button>
        </motion.div>
      </div>
    </section>
  );
}