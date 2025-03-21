/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['demo.ghost.io', 'static.ghost.org', 'www.gravatar.com'],
  },
  reactStrictMode: true,
  webpack(config) {
    config.module.rules.push({
      resourceQuery: /url/, // *.svg?url -- for importing SVGs as URLs
      test: /\.svg$/i,
      type: 'asset/resource',
    })
    config.module.rules.push({
      issuer: /\.[jt]sx?$/,
      test: /\.svg$/i,
      use: ['@svgr/webpack'],
    })

    return config
  },
}

module.exports = nextConfig
