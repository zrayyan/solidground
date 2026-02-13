'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Calculator, X } from 'lucide-react';

export default function EstimatorWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [squareFootage, setSquareFootage] = useState('');
  const [complexity, setComplexity] = useState('standard');
  const [estimate, setEstimate] = useState<number | null>(null);

  const calculateEstimate = () => {
    const sqFt = parseFloat(squareFootage);
    if (!sqFt || sqFt <= 0) return;

    const baseRate = 8; // $8 per sq ft
    const complexityMultiplier = {
      simple: 0.8,
      standard: 1.0,
      complex: 1.3,
      premium: 1.6
    };

    const total = sqFt * baseRate * complexityMultiplier[complexity as keyof typeof complexityMultiplier];
    setEstimate(total);
  };

  return (
    <>
      {/* Floating Button */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(true)}
        className="fixed bottom-24 right-8 bg-safety-orange hover:bg-safety-orange/90 text-white p-4 rounded-full shadow-lg z-40"
        aria-label="Open estimator"
      >
        <Calculator className="w-6 h-6" />
      </motion.button>

      {/* Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-lg shadow-xl max-w-md w-full p-6"
            >
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-heading text-charcoal">Quick Estimate</h3>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="space-y-4">
                <div>
                  <Label htmlFor="squareFootage">Square Footage</Label>
                  <Input
                    id="squareFootage"
                    type="number"
                    placeholder="Enter square footage"
                    value={squareFootage}
                    onChange={(e) => setSquareFootage(e.target.value)}
                  />
                </div>

                <div>
                  <Label htmlFor="complexity">Complexity Level</Label>
                  <select
                    id="complexity"
                    value={complexity}
                    onChange={(e) => setComplexity(e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-safety-orange focus:border-transparent"
                  >
                    <option value="simple">Simple (Basic finish)</option>
                    <option value="standard">Standard (Stamped)</option>
                    <option value="complex">Complex (Decorative)</option>
                    <option value="premium">Premium (Custom design)</option>
                  </select>
                </div>

                <Button
                  onClick={calculateEstimate}
                  className="w-full bg-safety-orange hover:bg-safety-orange/90"
                >
                  Calculate Estimate
                </Button>

                {estimate && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center p-4 bg-gray-50 rounded-lg"
                  >
                    <p className="text-sm text-gray-600 mb-2">Estimated Range</p>
                    <p className="text-3xl font-heading text-safety-orange">
                      ${Math.round(estimate * 0.9).toLocaleString()} - ${Math.round(estimate * 1.1).toLocaleString()}
                    </p>
                    <p className="text-xs text-gray-500 mt-2">
                      *This is a rough estimate. Actual costs may vary.
                    </p>
                  </motion.div>
                )}

                <Button
                  variant="outline"
                  className="w-full border-safety-orange text-safety-orange hover:bg-safety-orange hover:text-white"
                >
                  Schedule Free Consultation
                </Button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}