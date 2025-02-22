/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable static exports for Netlify Edge Runtime
  output: 'export',

  // Images configuration for Netlify
  images: {
    unoptimized: true,
  },

}

module.exports = nextConfig
