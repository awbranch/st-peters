/** @type {import('next').NextConfig} */

const { createClient, groq } = require('next-sanity');

const nextConfig = {
  // reactStrictMode: false,
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
    const client = createClient({
      projectId: 't6t8tv0q',
      dataset: 'production',
      apiVersion: '2023-08-28',
      useCdn: false,
    });

    let settings = await client.fetch(groq`*[_type == "settings"][0]`);

    return settings?.redirects
      ? settings.redirects.map((r) => ({
          source: r.source,
          destination: r.destination,
          permanent: true,
        }))
      : [];
  },
};

module.exports = nextConfig;
