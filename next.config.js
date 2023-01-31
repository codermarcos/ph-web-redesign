/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: true,
  },
  env: {
    HOST: process.env.HOST,
  },
  images: {
    domains: [
      'ph-files.imgix.net',
      'ph-avatars.imgix.net',
    ],
    unoptimized: true,
  },
  reactStrictMode: true,
  webpack: (config) => {

    config.module.rules.push({
      exclude: /node_modules/u,
      test: /\.(?:graphql|gql)$/u,
      use: [{ loader: 'graphql-tag/loader' }],
    });

    return config;

  },
};

module.exports = nextConfig;
