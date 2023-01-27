const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  exportPathMap: function() {
    return {
      '/': { page: '/' },
      '/about-me': { page: '/AboutMe' },
    };
  },
};

module.exports = nextConfig;