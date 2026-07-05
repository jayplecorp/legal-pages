/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/legal-pages',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
}

export default nextConfig
