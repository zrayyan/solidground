'use client';

import { motion } from 'framer-motion';
import { Phone, Mail, Clock, MapPin } from 'lucide-react';

export default function ContactHero() {
  return (
    <section className="relative bg-gradient-to-br from-concrete-gray to-steel-blue text-white py-20">
      <div className="absolute inset-0 bg-black/20" />
      <div className="relative max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6 font-bebas">
            Contact Us
          </h1>
          <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto">
            Ready to start your concrete project? Get in touch for a free estimate
            or expert consultation. We&apos;re here to help bring your vision to life.
          </p>

          {/* Quick Contact Info */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white/10 backdrop-blur-sm rounded-lg p-6"
            >
              <Phone className="w-8 h-8 mx-auto mb-3 text-safety-orange" />
              <h3 className="font-semibold mb-2">Call Us</h3>
              <p className="text-sm">(555) 123-CONCRETE</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-white/10 backdrop-blur-sm rounded-lg p-6"
            >
              <Mail className="w-8 h-8 mx-auto mb-3 text-safety-orange" />
              <h3 className="font-semibold mb-2">Email</h3>
              <p className="text-sm">info@solidground.com</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-white/10 backdrop-blur-sm rounded-lg p-6"
            >
              <Clock className="w-8 h-8 mx-auto mb-3 text-safety-orange" />
              <h3 className="font-semibold mb-2">Hours</h3>
              <p className="text-sm">24/7 Emergency</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="bg-white/10 backdrop-blur-sm rounded-lg p-6"
            >
              <MapPin className="w-8 h-8 mx-auto mb-3 text-safety-orange" />
              <h3 className="font-semibold mb-2">Location</h3>
              <p className="text-sm">Serving Metro Area</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}