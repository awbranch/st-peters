/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: 'export',
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
        port: '',
      },
    ],
  },
  logging: {
    fetches: {
      fullUrl: true,
    },
  },
  async redirects() {
    return [
      {
        source: '/contact-us',
        destination: '/contact',
        permanent: true,
      },
      {
        source: '/other-programs',
        destination: '/about/area-programs',
        permanent: true,
      },
      {
        source: '/meal-program',
        destination: '/about/lunch-program',
        permanent: true,
      },
      {
        source: '/meal-program',
        destination: '/about/lunch-program',
        permanent: true,
      },
      {
        source: '/community-garden/',
        destination: '/about/seasonal-programs',
        permanent: true,
      },
      {
        source: '/community-garden',
        destination: '/about/seasonal-programs',
        permanent: true,
      },
      {
        source: '/delivery-volunteers',
        destination: '/volunteer',
        permanent: true,
      },
      {
        source: '/news-events',
        destination: '/news',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
