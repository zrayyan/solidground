'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { ChevronLeft, ChevronRight, Check, Upload, MapPin } from 'lucide-react';

const estimateSchema = z.object({
  projectType: z.enum(['residential', 'commercial']),
  serviceType: z.string().min(1, 'Please select a service type'),
  squareFootage: z.string().min(1, 'Please enter square footage'),
  complexity: z.enum(['simple', 'standard', 'complex', 'premium']),
  timeline: z.enum(['urgent', 'standard', 'flexible']),
  address: z.string().min(1, 'Please enter your address'),
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email'),
  phone: z.string().min(10, 'Please enter a valid phone number'),
  description: z.string().optional(),
  photos: z.array(z.string()).optional(),
});

type EstimateForm = z.infer<typeof estimateSchema>;

const steps = [
  { title: 'Project Type', description: 'Residential or Commercial' },
  { title: 'Service Details', description: 'What service do you need?' },
  { title: 'Project Size', description: 'Square footage and complexity' },
  { title: 'Timeline', description: 'When do you need it done?' },
  { title: 'Location', description: 'Project address' },
  { title: 'Contact Info', description: 'Your details' },
  { title: 'Additional Info', description: 'Photos and description' },
];

export default function EstimatorForm() {
  const [currentStep, setCurrentStep] = useState(0);
  const [estimate, setEstimate] = useState<number | null>(null);

  const form = useForm<EstimateForm>({
    resolver: zodResolver(estimateSchema),
    defaultValues: {
      projectType: 'residential',
      complexity: 'standard',
      timeline: 'standard',
      photos: [],
    },
  });

  const calculateEstimate = (data: Partial<EstimateForm>) => {
    const sqFt = parseFloat(data.squareFootage || '0');
    if (!sqFt) return;

    const baseRates = {
      'driveways-walkways': 12,
      'stamped-concrete': 18,
      'patios-pool-decks': 20,
      'concrete-repairs': 10,
      'epoxy-flooring': 8,
    };

    const complexityMultiplier = {
      simple: 0.8,
      standard: 1.0,
      complex: 1.3,
      premium: 1.6,
    };

    const timelineMultiplier = {
      urgent: 1.2,
      standard: 1.0,
      flexible: 0.9,
    };

    const baseRate = baseRates[data.serviceType as keyof typeof baseRates] || 15;
    const total = sqFt * baseRate * complexityMultiplier[data.complexity as keyof typeof complexityMultiplier] * timelineMultiplier[data.timeline as keyof typeof timelineMultiplier];

    setEstimate(total);
  };

  const nextStep = async () => {
    const isValid = await form.trigger();
    if (isValid) {
      if (currentStep === 2) {
        calculateEstimate(form.getValues());
      }
      setCurrentStep(prev => Math.min(prev + 1, steps.length - 1));
    }
  };

  const prevStep = () => {
    setCurrentStep(prev => Math.max(prev - 1, 0));
  };

  const onSubmit = (data: EstimateForm) => {
    console.log('Form submitted:', data);
    // Here you would send the data to your backend
    alert('Thank you! We\'ll contact you within 24 hours with your detailed estimate.');
  };

  const progress = ((currentStep + 1) / steps.length) * 100;

  return (
    <div className="min-h-screen bg-off-white py-12">
      <div className="max-w-4xl mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <h1 className="text-4xl font-heading text-charcoal mb-4">
            Free Project Estimator
          </h1>
          <p className="text-xl text-gray-600">
            Get an instant estimate for your concrete project in just a few minutes.
          </p>
        </motion.div>

        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-4">
            <span className="text-sm font-medium text-charcoal">
              Step {currentStep + 1} of {steps.length}
            </span>
            <span className="text-sm text-gray-500">
              {steps[currentStep].title}
            </span>
          </div>
          <Progress value={progress} className="h-2" />
        </div>

        {/* Form */}
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl text-charcoal">
              {steps[currentStep].title}
            </CardTitle>
            <p className="text-gray-600">{steps[currentStep].description}</p>
          </CardHeader>
          <CardContent>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <AnimatePresence mode="wait">
                {currentStep === 0 && (
                  <motion.div
                    key="step0"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-4"
                  >
                    <div className="grid grid-cols-2 gap-4">
                      <Button
                        type="button"
                        variant={form.watch('projectType') === 'residential' ? 'default' : 'outline'}
                        className="h-24 flex flex-col items-center justify-center"
                        onClick={() => form.setValue('projectType', 'residential')}
                      >
                        <span className="text-lg font-semibold">Residential</span>
                        <span className="text-sm">Home Projects</span>
                      </Button>
                      <Button
                        type="button"
                        variant={form.watch('projectType') === 'commercial' ? 'default' : 'outline'}
                        className="h-24 flex flex-col items-center justify-center"
                        onClick={() => form.setValue('projectType', 'commercial')}
                      >
                        <span className="text-lg font-semibold">Commercial</span>
                        <span className="text-sm">Business Projects</span>
                      </Button>
                    </div>
                  </motion.div>
                )}

                {currentStep === 1 && (
                  <motion.div
                    key="step1"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-4"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {[
                        'driveways-walkways',
                        'stamped-concrete',
                        'patios-pool-decks',
                        'concrete-repairs',
                        'epoxy-flooring',
                      ].map((service) => (
                        <Button
                          key={service}
                          type="button"
                          variant={form.watch('serviceType') === service ? 'default' : 'outline'}
                          className="h-16 text-left justify-start"
                          onClick={() => form.setValue('serviceType', service)}
                        >
                          {service.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}
                        </Button>
                      ))}
                    </div>
                  </motion.div>
                )}

                {currentStep === 2 && (
                  <motion.div
                    key="step2"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-6"
                  >
                    <div>
                      <Label htmlFor="squareFootage">Approximate Square Footage</Label>
                      <Input
                        id="squareFootage"
                        type="number"
                        placeholder="e.g., 1000"
                        {...form.register('squareFootage')}
                      />
                      {form.formState.errors.squareFootage && (
                        <p className="text-red-500 text-sm mt-1">
                          {form.formState.errors.squareFootage.message}
                        </p>
                      )}
                    </div>

                    <div>
                      <Label>Complexity Level</Label>
                      <div className="grid grid-cols-2 gap-3 mt-2">
                        {[
                          { value: 'simple', label: 'Simple', desc: 'Basic finish' },
                          { value: 'standard', label: 'Standard', desc: 'Standard options' },
                          { value: 'complex', label: 'Complex', desc: 'Advanced features' },
                          { value: 'premium', label: 'Premium', desc: 'Custom design' },
                        ].map((option) => (
                          <Button
                            key={option.value}
                            type="button"
                            variant={form.watch('complexity') === option.value ? 'default' : 'outline'}
                            className="h-auto p-3 flex flex-col items-start"
                            onClick={() => form.setValue('complexity', option.value as 'simple' | 'standard' | 'complex' | 'premium')}
                          >
                            <span className="font-semibold">{option.label}</span>
                            <span className="text-xs opacity-75">{option.desc}</span>
                          </Button>
                        ))}
                      </div>
                    </div>

                    {estimate && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="bg-safety-orange/10 border border-safety-orange rounded-lg p-4"
                      >
                        <h3 className="font-semibold text-charcoal mb-2">Estimated Range</h3>
                        <p className="text-2xl font-heading text-safety-orange">
                          ${Math.round(estimate * 0.9).toLocaleString()} - ${Math.round(estimate * 1.1).toLocaleString()}
                        </p>
                        <p className="text-sm text-gray-600 mt-1">
                          *This is a rough estimate. Final pricing may vary based on site conditions.
                        </p>
                      </motion.div>
                    )}
                  </motion.div>
                )}

                {currentStep === 3 && (
                  <motion.div
                    key="step3"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-4"
                  >
                    <div className="grid grid-cols-3 gap-4">
                      {[
                        { value: 'urgent', label: 'Urgent', desc: 'Within 2 weeks' },
                        { value: 'standard', label: 'Standard', desc: '4-6 weeks' },
                        { value: 'flexible', label: 'Flexible', desc: 'No rush' },
                      ].map((option) => (
                        <Button
                          key={option.value}
                          type="button"
                          variant={form.watch('timeline') === option.value ? 'default' : 'outline'}
                          className="h-20 flex flex-col items-center justify-center"
                          onClick={() => form.setValue('timeline', option.value as 'urgent' | 'standard' | 'flexible')}
                        >
                          <span className="font-semibold">{option.label}</span>
                          <span className="text-xs opacity-75">{option.desc}</span>
                        </Button>
                      ))}
                    </div>
                  </motion.div>
                )}

                {currentStep === 4 && (
                  <motion.div
                    key="step4"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-4"
                  >
                    <div>
                      <Label htmlFor="address">Project Address</Label>
                      <div className="relative">
                        <MapPin className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                        <Input
                          id="address"
                          placeholder="Enter your project address"
                          className="pl-10"
                          {...form.register('address')}
                        />
                      </div>
                      {form.formState.errors.address && (
                        <p className="text-red-500 text-sm mt-1">
                          {form.formState.errors.address.message}
                        </p>
                      )}
                    </div>
                  </motion.div>
                )}

                {currentStep === 5 && (
                  <motion.div
                    key="step5"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-4"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name">Full Name</Label>
                        <Input
                          id="name"
                          placeholder="Your full name"
                          {...form.register('name')}
                        />
                        {form.formState.errors.name && (
                          <p className="text-red-500 text-sm mt-1">
                            {form.formState.errors.name.message}
                          </p>
                        )}
                      </div>
                      <div>
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input
                          id="phone"
                          placeholder="(555) 123-4567"
                          {...form.register('phone')}
                        />
                        {form.formState.errors.phone && (
                          <p className="text-red-500 text-sm mt-1">
                            {form.formState.errors.phone.message}
                          </p>
                        )}
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="email">Email Address</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="your@email.com"
                        {...form.register('email')}
                      />
                      {form.formState.errors.email && (
                        <p className="text-red-500 text-sm mt-1">
                          {form.formState.errors.email.message}
                        </p>
                      )}
                    </div>
                  </motion.div>
                )}

                {currentStep === 6 && (
                  <motion.div
                    key="step6"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-4"
                  >
                    <div>
                      <Label htmlFor="description">Project Description (Optional)</Label>
                      <Textarea
                        id="description"
                        placeholder="Tell us more about your project..."
                        rows={4}
                        {...form.register('description')}
                      />
                    </div>

                    <div>
                      <Label>Project Photos (Optional)</Label>
                      <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                        <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                        <p className="text-gray-600">Drag & drop photos or click to browse</p>
                        <p className="text-sm text-gray-500 mt-1">JPG, PNG up to 10MB each</p>
                        <Button type="button" variant="outline" className="mt-3">
                          Choose Files
                        </Button>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Navigation Buttons */}
              <div className="flex justify-between pt-6">
                <Button
                  type="button"
                  variant="outline"
                  onClick={prevStep}
                  disabled={currentStep === 0}
                  className="flex items-center"
                >
                  <ChevronLeft className="w-4 h-4 mr-2" />
                  Previous
                </Button>

                {currentStep === steps.length - 1 ? (
                  <Button type="submit" className="bg-safety-orange hover:bg-safety-orange/90 flex items-center">
                    <Check className="w-4 h-4 mr-2" />
                    Get My Estimate
                  </Button>
                ) : (
                  <Button
                    type="button"
                    onClick={nextStep}
                    className="bg-safety-orange hover:bg-safety-orange/90 flex items-center"
                  >
                    Next
                    <ChevronRight className="w-4 h-4 ml-2" />
                  </Button>
                )}
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}