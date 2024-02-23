/** @type {import('next').NextConfig} **/
const nextConfig = {
    reactStrictMode: true,
  }
  
    module.exports = nextConfig
  
  module.exports = {
    webpack: config => {
      config.resolve.fallback = { fs: false }
  
      return config
    },
    reactStrictMode: true,
  }