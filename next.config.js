/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    domains: ["res.cloudinary.com", "i.picsum.photos"],
    minimumCacheTTL: 60,
    formats: ["image/webp"],
  },
  devIndicators: {
    autoPrerender: true,
  },
};

module.exports = nextConfig;
