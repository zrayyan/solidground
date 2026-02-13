'use client';

import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Phone, Mail, Award } from 'lucide-react';

const teamMembers = [
  {
    name: 'John Anderson',
    role: 'Founder & CEO',
    bio: 'With 25+ years in the concrete industry, John leads our team with unmatched expertise and a passion for perfection.',
    image: '/images/team/john.svg',
    certifications: ['OSHA Certified', 'ACI Concrete Inspector'],
    phone: '(555) 867-5309',
    email: 'john@solidgroundconcrete.com',
  },
  {
    name: 'Sarah Martinez',
    role: 'Project Manager',
    bio: 'Sarah oversees all project coordination, ensuring timelines are met and client expectations exceeded.',
    image: '/images/team/sarah.svg',
    certifications: ['PMP Certified', 'Lean Construction'],
    phone: '(555) 867-5310',
    email: 'sarah@solidgroundconcrete.com',
  },
  {
    name: 'Mike Johnson',
    role: 'Lead Finisher',
    bio: 'Mike has been perfecting concrete finishes for 15 years, specializing in decorative and stamped concrete.',
    image: '/images/team/mike.svg',
    certifications: ['Decorative Concrete Certified', 'ACI Flatwork Technician'],
    phone: '(555) 867-5311',
    email: 'mike@solidgroundconcrete.com',
  },
  {
    name: 'Lisa Chen',
    role: 'Quality Control Specialist',
    bio: 'Lisa ensures every project meets our rigorous quality standards and industry best practices.',
    image: '/images/team/lisa.svg',
    certifications: ['ACI Concrete Field Testing', 'Quality Management'],
    phone: '(555) 867-5312',
    email: 'lisa@solidgroundconcrete.com',
  },
];

export default function TeamSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-3xl font-heading text-center mb-16 text-charcoal"
        >
          Meet Our Team
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-2xl font-bold text-gray-600">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>

                  <h3 className="text-xl font-semibold text-charcoal mb-1">{member.name}</h3>
                  <p className="text-safety-orange font-medium mb-4">{member.role}</p>

                  <p className="text-gray-600 text-sm mb-4">{member.bio}</p>

                  <div className="space-y-2 mb-4">
                    {member.certifications.map(cert => (
                      <Badge key={cert} variant="outline" className="text-xs">
                        <Award className="w-3 h-3 mr-1" />
                        {cert}
                      </Badge>
                    ))}
                  </div>

                  <div className="space-y-2 text-sm text-gray-600">
                    <div className="flex items-center justify-center">
                      <Phone className="w-4 h-4 mr-2" />
                      {member.phone}
                    </div>
                    <div className="flex items-center justify-center">
                      <Mail className="w-4 h-4 mr-2" />
                      {member.email}
                    </div>
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
          <h3 className="text-2xl font-heading mb-4 text-charcoal">Join Our Team</h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            We&apos;re always looking for skilled concrete professionals to join our growing team.
            If you have experience in concrete work and a commitment to quality, we&apos;d love to hear from you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-flex items-center px-6 py-3 bg-safety-orange text-white rounded-lg hover:bg-safety-orange/90 transition-colors"
            >
              Apply Now
            </a>
            <a
              href="/contact"
              className="inline-flex items-center px-6 py-3 border border-safety-orange text-safety-orange rounded-lg hover:bg-safety-orange hover:text-white transition-colors"
            >
              Contact HR
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}