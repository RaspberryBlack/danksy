/** @type {import('next').NextConfig} */
const withPlugins = require('next-compose-plugins')
const withExportImages = require('next-export-optimize-images')

module.exports = withPlugins(
  [
    withExportImages,
  ],
  {
    images: {
      domains: [process.env.NEXT_IMAGE_DOMAIN],
      deviceSizes: [640, 828, 1280],
      imageSizes: [200, 400],
    }
  }
)
