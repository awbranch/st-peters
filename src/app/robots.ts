import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  if (process.env.VERCEL_ENV === 'production') {
    return {
      rules: {
        userAgent: '*',
        disallow: '/admin',
      },
      sitemap: 'https://stpeterskitchen.org/sitemap.xml',
    };
  } else
    return {
      rules: {
        userAgent: '*',
        disallow: '/',
      },
    };
}
