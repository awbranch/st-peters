import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  if (process.env.BRANCH_STUDIO_VISIBILITY === 'public') {
    return {
      rules: {
        userAgent: '*',
        disallow: '/admin',
      },
      sitemap: `${process.env.BRANCH_STUDIO_HOME_URL}/sitemap.xml`,
    };
  } else
    return {
      rules: {
        userAgent: '*',
        disallow: '/',
      },
    };
}
