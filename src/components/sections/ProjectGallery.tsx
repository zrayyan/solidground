'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

const projects = [
  {
    id: 1,
    title: 'Modern Driveway',
    category: 'Driveways',
    before: '/images/projects/driveway-before.svg',
    after: '/images/projects/driveway-after.svg',
    description: 'Stamped concrete driveway with intricate patterns'
  },
  {
    id: 2,
    title: 'Pool Deck Paradise',
    category: 'Pool Decks',
    before: '/images/projects/pool-before.svg',
    after: '/images/projects/pool-after.svg',
    description: 'Luxurious pool deck with non-slip finish'
  },
  {
    id: 3,
    title: 'Patio Transformation',
    category: 'Patios',
    before: '/images/projects/patio-before.svg',
    after: '/images/projects/patio-after.svg',
    description: 'Outdoor living space with decorative concrete'
  },
];

export default function ProjectGallery() {
  const [activeProject, setActiveProject] = useState(0);

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl font-heading text-center mb-16 text-charcoal"
        >
          Before & After Gallery
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative cursor-pointer rounded-lg overflow-hidden shadow-lg ${
                activeProject === index ? 'ring-4 ring-safety-orange' : ''
              }`}
              onClick={() => setActiveProject(index)}
            >
              <div className="relative h-64">
                <Image
                  src={project.after}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                  <div className="text-center text-white">
                    <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                    <p className="text-sm opacity-90">{project.category}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Active Project Detail */}
        <motion.div
          key={activeProject}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mt-12 bg-white rounded-lg shadow-xl p-8"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-heading mb-4 text-charcoal">
                {projects[activeProject].title}
              </h3>
              <p className="text-gray-600 mb-6">{projects[activeProject].description}</p>
              <Button className="bg-safety-orange hover:bg-safety-orange/90">
                View Full Case Study
              </Button>
            </div>
            <div className="relative h-64 rounded-lg overflow-hidden">
              <Image
                src={projects[activeProject].after}
                alt={projects[activeProject].title}
                fill
                className="object-cover"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}