/** @type {import('next').NextConfig} */
const nextConfig = {
  // Output configuration for Cloudflare Pages
  output: 'export',
  trailingSlash: true,

  // Image optimization - disable for static export
  images: {
    unoptimized: true,
  },

  // Experimental features for performance
  experimental: {
    optimizeCss: true,
    scrollRestoration: true,
  },

  // Turbopack configuration
  turbopack: {},
};

module.exports = nextConfig;