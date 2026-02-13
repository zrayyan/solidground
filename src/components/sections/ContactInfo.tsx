'use client';

import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Users, Award, Shield } from 'lucide-react';

export default function ContactInfo() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      className="space-y-8"
    >
      {/* Map Placeholder */}
      <div className="bg-gray-200 rounded-lg h-64 flex items-center justify-center">
        <div className="text-center">
          <MapPin className="w-12 h-12 text-gray-400 mx-auto mb-2" />
          <p className="text-gray-500">Interactive Map Coming Soon</p>
          <p className="text-sm text-gray-400">Serving Metro Area & Surrounding Counties</p>
        </div>
      </div>

      {/* Contact Information */}
      <div className="bg-white rounded-lg shadow-xl p-8">
        <h3 className="text-2xl font-bold mb-6 text-concrete-gray">Get In Touch</h3>

        <div className="space-y-6">
          <div className="flex items-start space-x-4">
            <Phone className="w-6 h-6 text-steel-blue mt-1" />
            <div>
              <h4 className="font-semibold text-concrete-gray">Phone</h4>
              <p className="text-gray-600">(555) 123-CONCRETE</p>
              <p className="text-sm text-gray-500">24/7 Emergency Line</p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <Mail className="w-6 h-6 text-steel-blue mt-1" />
            <div>
              <h4 className="font-semibold text-concrete-gray">Email</h4>
              <p className="text-gray-600">info@solidground.com</p>
              <p className="text-sm text-gray-500">We respond within 2 hours</p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <MapPin className="w-6 h-6 text-steel-blue mt-1" />
            <div>
              <h4 className="font-semibold text-concrete-gray">Service Area</h4>
              <p className="text-gray-600">Metro Area & Surrounding Counties</p>
              <p className="text-sm text-gray-500">Free estimates within 50 miles</p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <Clock className="w-6 h-6 text-steel-blue mt-1" />
            <div>
              <h4 className="font-semibold text-concrete-gray">Business Hours</h4>
              <p className="text-gray-600">Monday - Friday: 7:00 AM - 6:00 PM</p>
              <p className="text-gray-600">Saturday: 8:00 AM - 4:00 PM</p>
              <p className="text-gray-600">Sunday: Emergency Only</p>
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="bg-gradient-to-br from-steel-blue to-concrete-gray text-white rounded-lg p-8">
        <h3 className="text-2xl font-bold mb-6">Why Choose SolidGround?</h3>

        <div className="space-y-4">
          <div className="flex items-center space-x-3">
            <Award className="w-6 h-6 text-safety-orange" />
            <span>20+ Years of Excellence</span>
          </div>

          <div className="flex items-center space-x-3">
            <Shield className="w-6 h-6 text-safety-orange" />
            <span>Licensed & Fully Insured</span>
          </div>

          <div className="flex items-center space-x-3">
            <Users className="w-6 h-6 text-safety-orange" />
            <span>Expert Certified Team</span>
          </div>
        </div>

        <div className="mt-8 p-4 bg-white/10 rounded-lg">
          <p className="text-sm">
            <strong>Free Estimates:</strong> No obligation consultations with detailed project quotes
          </p>
        </div>
      </div>

      {/* Emergency Contact */}
      <div className="bg-red-50 border border-red-200 rounded-lg p-6">
        <h4 className="text-lg font-bold text-red-800 mb-2">Emergency Repairs</h4>
        <p className="text-red-700 mb-4">
          Concrete emergencies don&apos;t wait. We&apos;re available 24/7 for urgent repairs.
        </p>
        <div className="flex items-center space-x-2">
          <Phone className="w-5 h-5 text-red-600" />
          <span className="font-semibold text-red-800">(555) 911-CONCRETE</span>
        </div>
      </div>
    </motion.div>
  );
}