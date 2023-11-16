/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config) {
    config.module.rules.push({
      resourceQuery: /url/, // *.svg?url
      test: /\.svg$/i,
      type: 'asset',
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
