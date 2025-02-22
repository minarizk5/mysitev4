/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable static exports for Netlify Edge Runtime
  output: 'export',

  // Images configuration for Netlify
  images: {
    unoptimized: true,
  },

  // Disable server-side features not supported in static exports
  experimental: {
    appDir: true,
  },
}

module.exports = nextConfig
