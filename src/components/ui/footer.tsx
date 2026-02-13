'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ArrowUp, Facebook, Instagram, Linkedin, MapPin, Phone, Mail } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-charcoal text-off-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-heading mb-4">SolidGround</h3>
            <p className="text-gray-300 mb-4">
              Built to Last. Crafted to Impress. Premium concrete craftsmanship for residential & commercial projects.
            </p>
            <div className="space-y-2 text-sm">
              <div className="flex items-center">
                <Phone className="w-4 h-4 mr-2" />
                (555) 867-5309
              </div>
              <div className="flex items-center">
                <Mail className="w-4 h-4 mr-2" />
                hello@solidgroundconcrete.com
              </div>
              <div className="flex items-center">
                <MapPin className="w-4 h-4 mr-2" />
                75-mile service radius
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="/services" className="text-gray-300 hover:text-off-white transition-colors">Services</a></li>
              <li><a href="/projects" className="text-gray-300 hover:text-off-white transition-colors">Portfolio</a></li>
              <li><a href="/about" className="text-gray-300 hover:text-off-white transition-colors">About Us</a></li>
              <li><a href="/blog" className="text-gray-300 hover:text-off-white transition-colors">Blog</a></li>
              <li><a href="/contact" className="text-gray-300 hover:text-off-white transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li><a href="/services/driveways" className="text-gray-300 hover:text-off-white transition-colors">Driveways</a></li>
              <li><a href="/services/patios" className="text-gray-300 hover:text-off-white transition-colors">Patios</a></li>
              <li><a href="/services/stamped" className="text-gray-300 hover:text-off-white transition-colors">Stamped Concrete</a></li>
              <li><a href="/services/repairs" className="text-gray-300 hover:text-off-white transition-colors">Repairs</a></li>
              <li><a href="/estimate" className="text-gray-300 hover:text-off-white transition-colors">Get Estimate</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Pro Tips for Property Owners</h4>
            <p className="text-gray-300 mb-4 text-sm">
              Get monthly concrete care tips and seasonal maintenance guides.
            </p>
            <div className="space-y-2">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-gray-800 border-gray-600 text-off-white placeholder-gray-400"
              />
              <Button className="w-full bg-safety-orange hover:bg-safety-orange/90">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        {/* Service Area Map Placeholder */}
        <div className="mt-12 pt-8 border-t border-gray-700">
          <h4 className="text-lg font-semibold mb-4 text-center">Service Area</h4>
          <div className="bg-gray-800 rounded-lg h-48 flex items-center justify-center">
            <div className="text-center">
              <MapPin className="w-12 h-12 mx-auto mb-2 text-safety-orange" />
              <p className="text-gray-300">Interactive service area map</p>
              <p className="text-sm text-gray-400">75-mile radius from our location</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm text-gray-400 mb-4 md:mb-0">
            © 2024 SolidGround Concrete Solutions. All rights reserved.
          </div>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-off-white transition-colors">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-off-white transition-colors">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-off-white transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 bg-safety-orange hover:bg-safety-orange/90 text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
        aria-label="Back to top"
      >
        <ArrowUp className="w-5 h-5" />
      </button>
    </footer>
  );
}