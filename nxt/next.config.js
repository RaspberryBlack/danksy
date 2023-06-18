/** @type {import('next').NextConfig} */
// https://github.com/cyrilwanner/next-compose-plugins/issues/59#issuecomment-1192523231
const withExportImages = require('next-export-optimize-images')

const nextConfig = {
  images: {
    domains: [process.env.NEXT_IMAGE_DOMAIN],
      deviceSizes: [640, 828, 1280],
      imageSizes: [200, 400],
  }
}

module.exports = (_phase, { nextConfig }) => {
  const plugins = [ withExportImages ]
  return plugins.reduce((acc, plugin) => plugin(acc), { ...nextConfig })
}
