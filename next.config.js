/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  productionBrowserSourceMaps: true,
  swcMinify:true,
  // exportPathMap: function() {
  //   return {
  //     '/': { page: '/' },
  //   };
  // },
  // output: 'export',
  // unoptimized:true
  // output: 'export',
  // distDir: 'build',
  // publicRuntimeConfig: {
  //   localeSubpaths,
  // },
}

module.exports = nextConfig
