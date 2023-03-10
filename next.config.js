/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  productionBrowserSourceMaps: true,
  swcMinify:true,
  // unoptimized:true
  // output: 'export',
  // distDir: 'build',
  // publicRuntimeConfig: {
  //   localeSubpaths,
  // },
}

module.exports = nextConfig
