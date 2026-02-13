'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Menu, X, Phone } from 'lucide-react';
import Logo from './logo';

const navItems = [
  { name: 'Home', href: '/' },
  { name: 'Services', href: '/services' },
  { name: 'Projects', href: '/projects' },
  { name: 'About', href: '/about' },
  { name: 'Blog', href: '/blog' },
  { name: 'Contact', href: '/contact' },
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-xl shadow-2xl shadow-black/10 border-b border-gray-200/50'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <motion.div
              className="flex-shrink-0"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Logo size="sm" variant={isScrolled ? 'light' : 'dark'} />
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              {navItems.map((item, index) => {
                const isActive = pathname === item.href;
                return (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    className="relative"
                  >
                    <Link
                      href={item.href}
                      className={`relative px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 group ${
                        isActive
                          ? 'text-safety-orange bg-safety-orange/10'
                          : isScrolled
                            ? 'text-charcoal hover:text-safety-orange hover:bg-safety-orange/5'
                            : 'text-off-white hover:text-safety-orange hover:bg-white/10'
                      }`}
                    >
                      {item.name}
                      {/* Active indicator */}
                      {isActive && (
                        <motion.div
                          layoutId="activeTab"
                          className="absolute inset-0 bg-safety-orange/10 rounded-full"
                          initial={false}
                          transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                        />
                      )}
                      {/* Hover effect */}
                      <motion.div
                        className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-safety-orange rounded-full group-hover:w-full group-hover:left-0 transition-all duration-300"
                        initial={false}
                      />
                    </Link>
                  </motion.div>
                );
              })}
            </div>

            {/* Right Side Actions */}
            <div className="hidden lg:flex items-center space-x-4">
              {/* Emergency Contact */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8, duration: 0.5 }}
                className={`flex items-center space-x-2 px-3 py-2 rounded-full transition-colors ${
                  isScrolled
                    ? 'text-charcoal bg-gray-100/80 hover:bg-gray-200/80'
                    : 'text-off-white bg-white/10 hover:bg-white/20'
                }`}
              >
                <Phone className="w-4 h-4" />
                <span className="text-sm font-medium">(555) 867-5309</span>
              </motion.div>

              {/* CTA Button */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.9, duration: 0.5 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button className="bg-gradient-to-r from-safety-orange to-safety-orange/90 hover:from-safety-orange/90 hover:to-safety-orange text-white shadow-lg hover:shadow-xl transition-all duration-300 px-6 py-2.5 rounded-full font-semibold">
                  Get Free Estimate
                </Button>
              </motion.div>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden">
              <motion.button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className={`p-2 rounded-full transition-all duration-300 ${
                  isScrolled
                    ? 'text-charcoal hover:bg-gray-100'
                    : 'text-off-white hover:bg-white/20'
                }`}
                whileTap={{ scale: 0.95 }}
                aria-label="Toggle mobile menu"
              >
                <motion.div
                  animate={{ rotate: isMobileMenuOpen ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </motion.div>
              </motion.button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Navigation Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Mobile Menu */}
            <motion.div
              initial={{ x: '100%', opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: '100%', opacity: 0 }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="fixed top-0 right-0 h-full w-80 max-w-[90vw] bg-white shadow-2xl z-50 lg:hidden"
            >
              <div className="flex flex-col h-full">
                {/* Mobile Header */}
                <div className="flex items-center justify-between p-6 border-b border-gray-200">
                  <Logo size="sm" />
                  <button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="p-2 rounded-full hover:bg-gray-100 transition-colors"
                  >
                    <X className="w-6 h-6 text-charcoal" />
                  </button>
                </div>

                {/* Mobile Navigation Links */}
                <div className="flex-1 px-6 py-8">
                  <nav className="space-y-2">
                    {navItems.map((item, index) => {
                      const isActive = pathname === item.href;
                      return (
                        <motion.div
                          key={item.name}
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1, duration: 0.3 }}
                        >
                          <Link
                            href={item.href}
                            className={`block px-4 py-3 text-lg font-medium rounded-xl transition-all duration-300 ${
                              isActive
                                ? 'text-safety-orange bg-safety-orange/10 border-l-4 border-safety-orange'
                                : 'text-charcoal hover:text-safety-orange hover:bg-gray-50'
                            }`}
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            {item.name}
                          </Link>
                        </motion.div>
                      );
                    })}
                  </nav>

                  {/* Mobile CTA */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.3 }}
                    className="mt-8"
                  >
                    <Button className="w-full bg-gradient-to-r from-safety-orange to-safety-orange/90 hover:from-safety-orange/90 hover:to-safety-orange text-white shadow-lg hover:shadow-xl transition-all duration-300 py-4 rounded-xl font-semibold text-lg">
                      Get Free Estimate
                    </Button>
                  </motion.div>

                  {/* Mobile Contact */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7, duration: 0.3 }}
                    className="mt-6 p-4 bg-gray-50 rounded-xl"
                  >
                    <div className="flex items-center space-x-3 text-charcoal">
                      <div className="p-2 bg-safety-orange/10 rounded-full">
                        <Phone className="w-5 h-5 text-safety-orange" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">Emergency Contact</p>
                        <p className="font-semibold">(555) 867-5309</p>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}