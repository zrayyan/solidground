# SolidGround Concrete Solutions

A modern, professional website for a concrete contractor built with Next.js 14+, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Next.js 14+** with App Router
- **TypeScript** for type safety
- **Tailwind CSS** for styling
- **Framer Motion** for animations
- **shadcn/ui** components
- **React Hook Form + Zod** for validation
- **Zustand** for state management
- **Concrete-specific features**: Weather widget, curing countdown, visualizer

## 🛠️ Tech Stack

- **Framework**: Next.js 14+
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **UI Components**: shadcn/ui + Radix UI
- **Forms**: React Hook Form + Zod
- **State Management**: Zustand
- **Icons**: Lucide React
- **Email**: Resend

## 📁 Project Structure

```
solidground/
├── app/                    # Next.js app directory
│   ├── (routes)/          # Route groups
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Homepage
├── components/            # Reusable components
│   ├── ui/               # Base UI components
│   ├── sections/         # Page sections
│   ├── forms/            # Form components
│   ├── widgets/          # Widget components
│   └── animations/       # Animation components
├── lib/                  # Utility functions
├── hooks/                # Custom hooks
├── types/                # TypeScript types
└── styles/               # Global styles
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd solidground
```

2. Install dependencies:
```bash
npm install
```

3. Copy environment variables:
```bash
cp .env.example .env.local
```

4. Update environment variables in `.env.local`:
```env
# Resend API Key (for contact form emails)
RESEND_API_KEY=your_resend_api_key

# Google Analytics (optional)
GA_TRACKING_ID=your_ga_tracking_id
```

5. Run the development server:
```bash
npm run dev
```

6. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📜 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript type checking

## 🎨 Design System

### Colors
- **Primary**: Concrete Gray (#6B7280)
- **Secondary**: Steel Blue (#4A5568)
- **Accent**: Safety Orange (#FF6B35)
- **Warm Stone**: (#D4C4B0)
- **Charcoal**: (#1A202C)

### Typography
- **Headings**: Bebas Neue
- **Body**: Inter

### Animations
- Page transitions with smooth easing
- Scroll-triggered reveals
- Hover effects and micro-interactions
- Loading states and success animations

## 🌟 Key Features

### Concrete-Specific Tools
- **Weather Widget**: Real-time pouring conditions
- **Curing Countdown**: Track project curing progress
- **Estimator**: Interactive project cost calculator

### Performance Optimized
- Core Web Vitals optimized
- Image optimization (WebP/AVIF)
- Static generation where possible
- Efficient bundle splitting

### SEO & Accessibility
- Structured data (JSON-LD)
- Open Graph and Twitter Cards
- Semantic HTML
- Keyboard navigation support
- Screen reader friendly

## 🚀 Deployment

### Cloudflare Pages

1. Connect your GitHub repository to Cloudflare Pages
2. Set build command: `npm run build`
3. Set build output directory: `.next`
4. Add environment variables in Cloudflare dashboard
5. Deploy!

### Environment Variables for Production

```env
RESEND_API_KEY=your_production_resend_key
GA_TRACKING_ID=your_production_ga_id
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/your-feature`
3. Commit changes: `git commit -am 'Add your feature'`
4. Push to branch: `git push origin feature/your-feature`
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Support

For support or questions, contact:
- Email: info@solidground.com
- Phone: (555) 123-CONCRETE

---

Built with ❤️ for concrete contractors everywhere.
