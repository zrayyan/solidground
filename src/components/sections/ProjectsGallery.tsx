'use client';

import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Search, Filter, ExternalLink } from 'lucide-react';

interface Project {
  id: string;
  title: string;
  category: string;
  location: string;
  squareFootage: number;
  duration: string;
  description: string;
  testimonial: string;
  clientName: string;
  images: string[];
  tags: string[];
}

const projects: Project[] = [
  {
    id: '1',
    title: 'Modern Driveway Transformation',
    category: 'Driveways',
    location: 'Springfield, IL',
    squareFootage: 1200,
    duration: '3 days',
    description: 'Complete driveway replacement with stamped concrete and decorative borders.',
    testimonial: 'SolidGround exceeded our expectations. The team was professional and the results are stunning.',
    clientName: 'Sarah Johnson',
    images: ['/images/projects/driveway-1.svg', '/images/projects/driveway-2.svg'],
    tags: ['driveways', 'stamped', 'decorative']
  },
  {
    id: '2',
    title: 'Luxury Pool Deck',
    category: 'Pool Decks',
    location: 'Champaign, IL',
    squareFootage: 800,
    duration: '5 days',
    description: 'Custom pool deck with non-slip surface and integrated lighting.',
    testimonial: 'The attention to detail and quality of work is outstanding. Highly recommend!',
    clientName: 'Mike Chen',
    images: ['/images/projects/pool-1.svg', '/images/projects/pool-2.svg'],
    tags: ['pool-decks', 'patios', 'lighting']
  },
  {
    id: '3',
    title: 'Commercial Parking Lot',
    category: 'Commercial',
    location: 'Urbana, IL',
    squareFootage: 5000,
    duration: '2 weeks',
    description: 'Large commercial parking area with durable concrete and proper drainage.',
    testimonial: 'Professional service from start to finish. The project was completed on time and within budget.',
    clientName: 'ABC Corporation',
    images: ['/images/projects/commercial-1.svg', '/images/projects/commercial-2.svg'],
    tags: ['commercial', 'parking', 'drainage']
  },
  {
    id: '4',
    title: 'Stamped Concrete Patio',
    category: 'Patios',
    location: 'Bloomington, IL',
    squareFootage: 600,
    duration: '4 days',
    description: 'Beautiful outdoor patio with brick pattern stamping and custom colors.',
    testimonial: 'Our new patio is the perfect addition to our backyard. Love the craftsmanship!',
    clientName: 'David Wilson',
    images: ['/images/projects/patio-1.svg', '/images/projects/patio-2.svg'],
    tags: ['patios', 'stamped', 'outdoor']
  },
  {
    id: '5',
    title: 'Foundation Repair',
    category: 'Repairs',
    location: 'Peoria, IL',
    squareFootage: 1500,
    duration: '1 week',
    description: 'Complete foundation stabilization and concrete repair work.',
    testimonial: 'Fixed our foundation issues perfectly. The house feels stable again.',
    clientName: 'Linda Martinez',
    images: ['/images/projects/repair-1.svg', '/images/projects/repair-2.svg'],
    tags: ['repairs', 'foundation', 'stabilization']
  },
  {
    id: '6',
    title: 'Epoxy Garage Floor',
    category: 'Epoxy',
    location: 'Normal, IL',
    squareFootage: 800,
    duration: '3 days',
    description: 'Decorative epoxy coating with metallic flakes and protective finish.',
    testimonial: 'Our garage looks amazing! The epoxy finish is exactly what we wanted.',
    clientName: 'Robert Taylor',
    images: ['/images/projects/epoxy-1.svg', '/images/projects/epoxy-2.svg'],
    tags: ['epoxy', 'garage', 'decorative']
  }
];

const categories = ['All', 'Driveways', 'Patios', 'Pool Decks', 'Commercial', 'Repairs', 'Epoxy'];
const locations = ['All Locations', 'Springfield, IL', 'Champaign, IL', 'Urbana, IL', 'Bloomington, IL', 'Peoria, IL', 'Normal, IL'];

export default function ProjectsGallery() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedLocation, setSelectedLocation] = useState('All Locations');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = useMemo(() => {
    return projects.filter(project => {
      const matchesCategory = selectedCategory === 'All' || project.category === selectedCategory;
      const matchesLocation = selectedLocation === 'All Locations' || project.location === selectedLocation;
      const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           project.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));

      return matchesCategory && matchesLocation && matchesSearch;
    });
  }, [selectedCategory, selectedLocation, searchTerm]);

  return (
    <div className="min-h-screen bg-off-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-concrete-gray to-steel-blue text-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-heading mb-6"
          >
            Our Projects
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl max-w-3xl mx-auto"
          >
            Explore our portfolio of concrete craftsmanship. From residential driveways to commercial installations,
            see the quality and precision that sets us apart.
          </motion.p>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
              <Input
                placeholder="Search projects..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>

            {/* Filters */}
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2">
                <Filter className="w-4 h-4 text-gray-500" />
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-safety-orange focus:border-transparent"
                >
                  {categories.map(category => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
              </div>

              <select
                value={selectedLocation}
                onChange={(e) => setSelectedLocation(e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-safety-orange focus:border-transparent"
              >
                {locations.map(location => (
                  <option key={location} value={location}>{location}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer group"
                      onClick={() => setSelectedProject(project)}>
                  <div className="relative h-64">
                    <Image
                      src={project.images[0]}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-safety-orange text-white">
                        {project.category}
                      </Badge>
                    </div>
                    <div className="absolute top-4 right-4">
                      <ExternalLink className="w-5 h-5 text-white bg-black/50 rounded-full p-1" />
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-charcoal mb-2">{project.title}</h3>
                    <p className="text-gray-600 mb-4 line-clamp-2">{project.description}</p>
                    <div className="flex justify-between items-center text-sm text-gray-500">
                      <span>{project.location}</span>
                      <span>{project.squareFootage} sq ft</span>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No projects found matching your criteria.</p>
              <Button
                onClick={() => {
                  setSelectedCategory('All');
                  setSelectedLocation('All Locations');
                  setSearchTerm('');
                }}
                className="mt-4"
              >
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Project Modal */}
      {selectedProject && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedProject(null)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-lg shadow-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
          >
            <div className="p-6">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h2 className="text-3xl font-heading text-charcoal mb-2">{selectedProject.title}</h2>
                  <div className="flex items-center gap-4 text-gray-600">
                    <span>{selectedProject.location}</span>
                    <span>{selectedProject.squareFootage} sq ft</span>
                    <span>{selectedProject.duration}</span>
                  </div>
                </div>
                <Button variant="ghost" onClick={() => setSelectedProject(null)}>
                  ×
                </Button>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                {selectedProject.images.map((image, index) => (
                  <div key={index} className="relative h-64 rounded-lg overflow-hidden">
                    <Image
                      src={image}
                      alt={`${selectedProject.title} ${index + 1}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-charcoal mb-4">Project Details</h3>
                  <p className="text-gray-600 mb-6">{selectedProject.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tags.map(tag => (
                      <Badge key={tag} variant="outline">{tag}</Badge>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-charcoal mb-4">Client Testimonial</h3>
                  <blockquote className="text-gray-600 italic mb-4">
                    &ldquo;{selectedProject.testimonial}&rdquo;
                  </blockquote>
                  <cite className="text-safety-orange font-semibold">- {selectedProject.clientName}</cite>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t flex justify-end gap-4">
                <Button variant="outline" onClick={() => setSelectedProject(null)}>
                  Close
                </Button>
                <Button className="bg-safety-orange hover:bg-safety-orange/90">
                  Start Similar Project
                </Button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}