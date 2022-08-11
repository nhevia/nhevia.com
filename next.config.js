module.exports = {
  reactStrictMode: true,
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
  i18n: {
    locales: ['en-US'],
    defaultLocale: 'en-US',
  },
  images: {
    domains: [
      'dev.to',
      'i.stack.imgur.com',
      'thesourceimages.nyc3.cdn.digitaloceanspaces.com',
    ],
  },
};
