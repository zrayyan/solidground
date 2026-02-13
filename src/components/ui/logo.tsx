'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  animated?: boolean;
  href?: string;
  variant?: 'light' | 'dark';
}

interface LogoContentProps {
  className?: string;
  size: 'sm' | 'md' | 'lg';
  animated: boolean;
  variant: 'light' | 'dark';
}

function LogoContent({ className = '', size, animated, variant }: LogoContentProps) {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-16 h-16'
  };

  const textSizeClasses = {
    sm: 'text-lg',
    md: 'text-2xl',
    lg: 'text-3xl'
  };

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* Animated Logo Icon */}
      <motion.div
        className={`${sizeClasses[size]} relative`}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {/* Concrete Block Foundation */}
        <motion.svg
          viewBox="0 0 48 48"
          className="w-full h-full"
          initial={animated ? { opacity: 0, scale: 0.8 } : { opacity: 1, scale: 1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {/* Shadow/Base */}
          <motion.rect
            x="8"
            y="32"
            width="32"
            height="8"
            fill="#1a1a1a"
            opacity="0.3"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.2, duration: 0.4 }}
          />

          {/* Main Concrete Block */}
          <motion.rect
            x="6"
            y="6"
            width="36"
            height="32"
            fill="#8B7355"
            stroke="#654321"
            strokeWidth="1"
            rx="2"
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ delay: 0.1, duration: 0.5, ease: "easeOut" }}
          />

          {/* Concrete Texture Lines */}
          <motion.g
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.4 }}
          >
            <line x1="10" y1="12" x2="38" y2="12" stroke="#654321" strokeWidth="0.5" opacity="0.6" />
            <line x1="8" y1="18" x2="40" y2="18" stroke="#654321" strokeWidth="0.5" opacity="0.6" />
            <line x1="12" y1="24" x2="36" y2="24" stroke="#654321" strokeWidth="0.5" opacity="0.6" />
            <line x1="10" y1="30" x2="38" y2="30" stroke="#654321" strokeWidth="0.5" opacity="0.6" />
          </motion.g>

          {/* Foundation Level Indicator */}
          <motion.rect
            x="4"
            y="38"
            width="40"
            height="2"
            fill="#D4AF37"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.4, duration: 0.3 }}
          />

          {/* Stability Lines */}
          <motion.g
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ delay: 0.8, duration: 0.6, ease: "easeInOut" }}
          >
            <line x1="24" y1="6" x2="24" y2="38" stroke="#D4AF37" strokeWidth="1" strokeDasharray="2,2" />
            <line x1="12" y1="38" x2="12" y2="42" stroke="#D4AF37" strokeWidth="1" />
            <line x1="36" y1="38" x2="36" y2="42" stroke="#D4AF37" strokeWidth="1" />
          </motion.g>
        </motion.svg>

        {/* Pulse Effect */}
        {animated && (
          <motion.div
            className="absolute inset-0 rounded-lg border-2 border-safety-orange/30"
            initial={{ scale: 1, opacity: 0 }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0, 0.5, 0]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        )}
      </motion.div>

      {/* Animated Text */}
      <motion.div
        className="flex"
        initial={animated ? { opacity: 0, x: -20 } : { opacity: 1, x: 0 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        <motion.span
          className={`font-heading font-bold ${variant === 'light' ? 'text-charcoal' : 'text-off-white'} ${textSizeClasses[size]}`}
          whileHover={{ scale: 1.02 }}
        >
          Solid
        </motion.span>
        <motion.span
          className={`font-heading font-bold text-safety-orange ${textSizeClasses[size]}`}
          initial={{ color: variant === 'light' ? '#1A202C' : '#F4F4F4' }}
          animate={{ color: '#FF6B35' }}
          transition={{ delay: 0.8, duration: 0.4 }}
          whileHover={{ scale: 1.02 }}
        >
          Ground
        </motion.span>
      </motion.div>
    </div>
  );
}

export default function Logo({
  className = '',
  size = 'md',
  animated = true,
  href = '/',
  variant = 'dark'
}: LogoProps) {
  if (href) {
    return (
      <Link href={href} className="flex items-center">
        <LogoContent className={className} size={size} animated={animated} variant={variant} />
      </Link>
    );
  }

  return <LogoContent className={className} size={size} animated={animated} variant={variant} />;
}