export interface Service {
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  icon: string;
  category: 'Residential' | 'Commercial' | 'Decorative' | 'Structural';
  features: string[];
  process: {
    step: string;
    description: string;
    duration: string;
  }[];
  pricing: {
    tier: string;
    priceRange: string;
    description: string;
  }[];
  gallery: string[];
  faq: {
    question: string;
    answer: string;
  }[];
}

export const services: Service[] = [
  {
    slug: 'driveways-walkways',
    title: 'Driveways & Walkways',
    description: 'Custom concrete driveways and walkways with various finishes and patterns.',
    longDescription: 'Transform your property with our premium driveway and walkway solutions. We specialize in creating durable, beautiful concrete surfaces that enhance curb appeal and provide long-lasting functionality. From simple stamped patterns to complex decorative designs, we deliver craftsmanship that stands the test of time.',
    icon: 'Hammer',
    category: 'Residential',
    features: [
      'Stamped concrete patterns',
      'Colored concrete options',
      'Custom border designs',
      'Non-slip surface treatments',
      'Integrated drainage solutions',
      'Lifetime warranty'
    ],
    process: [
      {
        step: 'Site Assessment',
        description: 'We evaluate your property and discuss design preferences',
        duration: '1-2 hours'
      },
      {
        step: 'Design & Planning',
        description: 'Custom design creation with material selection',
        duration: '2-3 days'
      },
      {
        step: 'Site Preparation',
        description: 'Excavation and base preparation',
        duration: '1 day'
      },
      {
        step: 'Pour & Finish',
        description: 'Concrete pouring and stamping/finishing',
        duration: '1-2 days'
      },
      {
        step: 'Curing & Sealing',
        description: 'Proper curing time and protective sealing',
        duration: '7-28 days'
      }
    ],
    pricing: [
      {
        tier: 'Basic',
        priceRange: '$8-12/sq ft',
        description: 'Plain concrete with basic finish'
      },
      {
        tier: 'Standard',
        priceRange: '$12-18/sq ft',
        description: 'Stamped or colored concrete'
      },
      {
        tier: 'Premium',
        priceRange: '$18-25/sq ft',
        description: 'Custom designs with decorative elements'
      }
    ],
    gallery: [
      '/images/projects/driveway-1.svg',
      '/images/projects/driveway-2.svg',
      '/images/projects/driveway-3.svg'
    ],
    faq: [
      {
        question: 'How long does a driveway installation take?',
        answer: 'Most driveway projects take 3-5 days from start to finish, depending on size and complexity.'
      },
      {
        question: 'Can I use my driveway during curing?',
        answer: 'We recommend waiting 7 days before driving on new concrete, and 28 days for full curing.'
      }
    ]
  },
  {
    slug: 'stamped-concrete',
    title: 'Stamped Decorative Concrete',
    description: 'Beautiful patterns that mimic stone, brick, or tile for stunning results.',
    longDescription: 'Our stamped concrete service transforms ordinary concrete into extraordinary works of art. Using advanced stamping techniques and premium materials, we create surfaces that look like natural stone, brick, or tile while maintaining the durability and low maintenance of concrete.',
    icon: 'Stamp',
    category: 'Decorative',
    features: [
      'Authentic stone patterns',
      'Brick and tile designs',
      'Custom color options',
      'Texture variations',
      'Seamless integration',
      'Fade-resistant colors'
    ],
    process: [
      {
        step: 'Design Consultation',
        description: 'Pattern and color selection with 3D visualization',
        duration: '1-2 hours'
      },
      {
        step: 'Color & Release Agent',
        description: 'Application of coloring and release agents',
        duration: '1 day'
      },
      {
        step: 'Stamping Process',
        description: 'Artistic stamping with multiple pattern layers',
        duration: '1-2 days'
      },
      {
        step: 'Detail Work',
        description: 'Hand detailing and touch-ups',
        duration: '1 day'
      },
      {
        step: 'Sealing',
        description: 'Protective sealing and final inspection',
        duration: '1 day'
      }
    ],
    pricing: [
      {
        tier: 'Standard Patterns',
        priceRange: '$12-18/sq ft',
        description: 'Popular brick and stone patterns'
      },
      {
        tier: 'Premium Patterns',
        priceRange: '$18-25/sq ft',
        description: 'Complex or custom designs'
      },
      {
        tier: 'Luxury Finishes',
        priceRange: '$25-35/sq ft',
        description: 'Multi-layer stamping with custom colors'
      }
    ],
    gallery: [
      '/images/projects/stamped-1.svg',
      '/images/projects/stamped-2.svg',
      '/images/projects/stamped-3.svg'
    ],
    faq: [
      {
        question: 'How long does stamped concrete last?',
        answer: 'With proper maintenance, stamped concrete can last 20-30 years or more.'
      },
      {
        question: 'Can stamped concrete be repaired?',
        answer: 'Yes, small repairs are possible, though large areas may need full replacement.'
      }
    ]
  }
  // Add more services as needed
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find(service => service.slug === slug);
}

export function getAllServiceSlugs(): string[] {
  return services.map(service => service.slug);
}