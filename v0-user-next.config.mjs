/** @type {import('next').NextConfig} */
const nextConfig = {
  // This is crucial for GitHub Pages - it sets the correct base path
  basePath: process.env.NODE_ENV === 'production' ? '/cv_page' : '',
  
  // This ensures assets are referenced with the correct path
  assetPrefix: process.env.NODE_ENV === 'production' ? '/cv_page/' : '',
  
  // These are already in your main config, but including for completeness
  output: 'export',
  images: {
    unoptimized: true,
  },
  
  // Add trailing slash to ensure proper path resolution
  trailingSlash: true,
}

export default nextConfig
