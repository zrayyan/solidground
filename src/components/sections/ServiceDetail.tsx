'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, Clock, HelpCircle } from 'lucide-react';
import Image from 'next/image';
import { Service } from '@/lib/services';

interface ServiceDetailProps {
  service: Service;
}

export default function ServiceDetail({ service }: ServiceDetailProps) {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-concrete-gray to-steel-blue text-white">
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl"
          >
            <Badge variant="secondary" className="mb-4 bg-safety-orange text-white">
              {service.category}
            </Badge>
            <h1 className="text-4xl md:text-6xl font-heading mb-6">
              {service.title}
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200">
              {service.longDescription}
            </p>
            <Button size="lg" className="bg-safety-orange hover:bg-safety-orange/90">
              Get Free Estimate
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-off-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl font-heading text-center mb-16 text-charcoal"
          >
            What&apos;s Included
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.features.map((feature, index) => (
              <motion.div
                key={feature}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex items-center space-x-3"
              >
                <CheckCircle className="w-6 h-6 text-safety-orange flex-shrink-0" />
                <span className="text-charcoal">{feature}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl font-heading text-center mb-16 text-charcoal"
          >
            Our Process
          </motion.h2>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-safety-orange hidden md:block" />

            <div className="space-y-8">
              {service.process.map((step, index) => (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`flex items-center ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  } flex-col md:gap-8`}
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-safety-orange rounded-full flex items-center justify-center mb-4 md:mb-0">
                    <span className="text-white font-bold">{index + 1}</span>
                  </div>

                  <div className={`flex-1 text-center md:text-left ${
                    index % 2 === 0 ? 'md:text-right' : 'md:text-left'
                  }`}>
                    <h3 className="text-xl font-semibold text-charcoal mb-2">{step.step}</h3>
                    <p className="text-gray-600 mb-2">{step.description}</p>
                    <div className="flex items-center justify-center md:justify-start">
                      <Clock className="w-4 h-4 text-safety-orange mr-2" />
                      <span className="text-sm text-gray-500">{step.duration}</span>
                    </div>
                  </div>

                  <div className="hidden md:block w-16" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 bg-charcoal">
        <div className="max-w-7xl mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl font-heading text-center mb-16 text-off-white"
          >
            Pricing Options
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {service.pricing.map((tier, index) => (
              <motion.div
                key={tier.tier}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full bg-white">
                  <CardHeader>
                    <CardTitle className="text-center text-charcoal">{tier.tier}</CardTitle>
                    <div className="text-center">
                      <span className="text-3xl font-heading text-safety-orange">{tier.priceRange}</span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 text-center mb-6">{tier.description}</p>
                    <Button className="w-full bg-safety-orange hover:bg-safety-orange/90">
                      Choose {tier.tier}
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-20 bg-off-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl font-heading text-center mb-16 text-charcoal"
          >
            Project Gallery
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {service.gallery.map((image, index) => (
              <motion.div
                key={image}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative h-64 rounded-lg overflow-hidden"
              >
                <Image
                  src={image}
                  alt={`${service.title} project ${index + 1}`}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl font-heading text-center mb-16 text-charcoal"
          >
            Frequently Asked Questions
          </motion.h2>

          <div className="space-y-6">
            {service.faq.map((item, index) => (
              <motion.div
                key={item.question}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center text-charcoal">
                      <HelpCircle className="w-5 h-5 text-safety-orange mr-3" />
                      {item.question}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{item.answer}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-safety-orange">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <h2 className="text-3xl font-heading text-white mb-6">
              Ready to Transform Your Space?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Get a free, no-obligation estimate for your {service.title.toLowerCase()} project.
            </p>
            <Button size="lg" variant="secondary" className="bg-white text-safety-orange hover:bg-gray-100">
              Schedule Free Consultation
            </Button>
          </motion.div>
        </div>
      </section>
    </main>
  );
}