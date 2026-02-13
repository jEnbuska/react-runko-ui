/** @type {import('next').NextConfig} */
const nextConfig = {
  // Ensure the library works with Next.js App Router and Pages Router
  transpilePackages: ['react-runko-ui'],
  
  // Enable React strict mode
  reactStrictMode: true,
  
  // Modern bundler features
  swcMinify: true,
  
  // Ensure CSS modules work
  cssModules: true,
};

module.exports = nextConfig;
