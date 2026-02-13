'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { MapPin, Phone, Clock } from 'lucide-react';

interface ServiceArea {
  id: string;
  name: string;
  cities: string[];
  responseTime: string;
  phone: string;
  path: string;
  center: { x: number; y: number };
}

const serviceAreas: ServiceArea[] = [
  {
    id: 'orlando',
    name: 'Orlando Metro',
    cities: ['Orlando', 'Winter Park', 'Lake Mary', 'Altamonte Springs'],
    responseTime: 'Same Day',
    phone: '(407) 555-0101',
    path: 'M50,30 L70,25 L85,35 L80,55 L60,60 L45,50 Z',
    center: { x: 65, y: 42 }
  },
  {
    id: 'tampa',
    name: 'Tampa Bay',
    cities: ['Tampa', 'St. Petersburg', 'Clearwater', 'Brandon'],
    responseTime: 'Next Day',
    phone: '(813) 555-0102',
    path: 'M30,15 L55,10 L75,20 L70,40 L45,45 L25,35 Z',
    center: { x: 50, y: 27 }
  },
  {
    id: 'daytona',
    name: 'Daytona Beach',
    cities: ['Daytona Beach', 'Deltona', 'Port Orange', 'New Smyrna Beach'],
    responseTime: 'Next Day',
    phone: '(386) 555-0103',
    path: 'M75,25 L95,20 L110,40 L105,60 L85,65 L70,45 Z',
    center: { x: 90, y: 42 }
  },
  {
    id: 'lakeland',
    name: 'Lakeland Area',
    cities: ['Lakeland', 'Winter Haven', 'Bartow', 'Auburndale'],
    responseTime: '2-3 Days',
    phone: '(863) 555-0104',
    path: 'M45,55 L70,50 L90,65 L85,85 L60,90 L35,75 Z',
    center: { x: 65, y: 70 }
  },
  {
    id: 'ocala',
    name: 'Ocala Region',
    cities: ['Ocala', 'The Villages', 'Leesburg', 'Clermont'],
    responseTime: '2-3 Days',
    phone: '(352) 555-0105',
    path: 'M15,35 L35,30 L50,50 L45,70 L25,75 L10,55 Z',
    center: { x: 30, y: 52 }
  }
];

export default function ServiceAreaMap() {
  const [selectedArea, setSelectedArea] = useState<ServiceArea | null>(null);
  const [hoveredArea, setHoveredArea] = useState<string | null>(null);

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-charcoal mb-6">
            Service Areas
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We proudly serve all of Central Florida with fast response times and expert concrete services.
            Click on any area to learn more about our coverage and contact information.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Interactive Map */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-200">
              <h3 className="text-2xl font-heading font-bold text-charcoal mb-6 text-center">
                Central Florida Coverage
              </h3>

              {/* SVG Map */}
              <div className="relative w-full h-96 bg-gradient-to-br from-blue-50 to-green-50 rounded-xl overflow-hidden border-2 border-gray-300">
                {/* Background Pattern */}
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 120 100">
                  {/* Grid Lines */}
                  <defs>
                    <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                      <path d="M 10 0 L 0 0 0 10" fill="none" stroke="#e5e7eb" strokeWidth="0.5" opacity="0.3"/>
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#grid)" />

                  {/* Service Areas */}
                  {serviceAreas.map((area) => (
                    <g key={area.id}>
                      {/* Area Shape */}
                      <motion.path
                        d={area.path}
                        fill={selectedArea?.id === area.id ? '#FF6B35' : hoveredArea === area.id ? '#FFA07A' : '#8B7355'}
                        stroke="#654321"
                        strokeWidth="2"
                        className="cursor-pointer transition-all duration-300"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setSelectedArea(area)}
                        onMouseEnter={() => setHoveredArea(area.id)}
                        onMouseLeave={() => setHoveredArea(null)}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: serviceAreas.indexOf(area) * 0.1, duration: 0.5 }}
                      />

                      {/* Area Label */}
                      <motion.text
                        x={area.center.x}
                        y={area.center.y}
                        textAnchor="middle"
                        className="text-xs font-semibold fill-white pointer-events-none select-none"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: serviceAreas.indexOf(area) * 0.1 + 0.3 }}
                      >
                        {area.name}
                      </motion.text>
                    </g>
                  ))}

                  {/* City Markers */}
                  {serviceAreas.flatMap((area) =>
                    area.cities.slice(0, 2).map((city, index) => {
                      const angle = (index * 60 - 30) * (Math.PI / 180);
                      const radius = 8;
                      const x = area.center.x + Math.cos(angle) * radius;
                      const y = area.center.y + Math.sin(angle) * radius;

                      return (
                        <motion.circle
                          key={`${area.id}-${city}`}
                          cx={x}
                          cy={y}
                          r="2"
                          fill="#FFD700"
                          stroke="#D4AF37"
                          strokeWidth="1"
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: serviceAreas.indexOf(area) * 0.1 + 0.5 + index * 0.1 }}
                        />
                      );
                    })
                  )}
                </svg>

                {/* Legend */}
                <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg p-3 shadow-lg">
                  <div className="flex items-center gap-2 text-sm">
                    <div className="w-3 h-3 bg-safety-orange rounded"></div>
                    <span className="text-charcoal font-medium">Selected Area</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm mt-1">
                    <div className="w-3 h-3 bg-concrete-brown rounded"></div>
                    <span className="text-charcoal font-medium">Service Area</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Area Details */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {selectedArea ? (
              <motion.div
                key={selectedArea.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-200"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-safety-orange rounded-full flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-heading font-bold text-charcoal">
                      {selectedArea.name}
                    </h3>
                    <p className="text-gray-600">Service Area Details</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-charcoal mb-2">Cities Served:</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedArea.cities.map((city) => (
                        <span
                          key={city}
                          className="bg-gray-100 text-charcoal px-3 py-1 rounded-full text-sm"
                        >
                          {city}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-gray-50 rounded-lg p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <Clock className="w-4 h-4 text-safety-orange" />
                        <span className="font-semibold text-charcoal">Response Time</span>
                      </div>
                      <p className="text-gray-700">{selectedArea.responseTime}</p>
                    </div>

                    <div className="bg-gray-50 rounded-lg p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <Phone className="w-4 h-4 text-safety-orange" />
                        <span className="font-semibold text-charcoal">Local Phone</span>
                      </div>
                      <p className="text-gray-700">{selectedArea.phone}</p>
                    </div>
                  </div>

                  <div className="bg-safety-orange/10 border border-safety-orange/20 rounded-lg p-4">
                    <p className="text-charcoal font-medium">
                      Ready to start your concrete project? Contact our {selectedArea.name.toLowerCase()} team today!
                    </p>
                  </div>
                </div>
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-200 text-center"
              >
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-8 h-8 text-gray-400" />
                </div>
                <h3 className="text-xl font-heading font-bold text-charcoal mb-2">
                  Select a Service Area
                </h3>
                <p className="text-gray-600">
                  Click on any area in the map to view detailed information about our services,
                  response times, and local contact information.
                </p>
              </motion.div>
            )}

            {/* Coverage Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-charcoal rounded-2xl p-8 text-white"
            >
              <h3 className="text-2xl font-heading font-bold mb-6 text-center">
                Coverage Statistics
              </h3>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-safety-orange mb-2">500+</div>
                  <div className="text-gray-300">Square Miles</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-safety-orange mb-2">50K+</div>
                  <div className="text-gray-300">Happy Customers</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-safety-orange mb-2">24/7</div>
                  <div className="text-gray-300">Emergency Service</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-safety-orange mb-2">15min</div>
                  <div className="text-gray-300">Average Response</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}