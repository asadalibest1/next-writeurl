/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
    distDir: "build",
  },
}

module.exports = nextConfig


// const withImages = require('next-images')
// module.exports = withImages({
//   webpack(config, options) {
//     return config
//   }
// })