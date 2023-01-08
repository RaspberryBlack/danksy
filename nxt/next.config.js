/** @type {import('next').NextConfig} */
const withExportImages = require('next-export-optimize-images');

const nextConfig = withExportImages({
  images: {
    domains: [process.env.NEXT_IMAGE_DOMAIN],
  },
});

module.exports = nextConfig
