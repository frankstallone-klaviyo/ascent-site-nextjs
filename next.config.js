/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      'images.prismic.io',
      'klaviyo.cdn.prismic.io',
      'images.unsplash.com'
    ],
  }
}

module.exports = nextConfig
