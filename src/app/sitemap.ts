import { getAllNewsStories, getPages } from '@/utils/sanity-utils';
import { Page } from '@/types/Page';
import { NewsStory } from '@/types/NewsStory';

type PageWithMeta = Page & {
  _updatedAt: string;
};

type NewsStoryWithMeta = NewsStory & {
  _updatedAt: string;
};

function slashCount(str: string) {
  return str.split('/').length - 1;
}

function isRecent(date: Date): boolean {
  // Return true if more recent than 15 days
  return (new Date().getTime() - date.getTime()) / (1000 * 60 * 60 * 24) < 15;
}

export default async function sitemap() {
  if (process.env.BRANCH_STUDIO_VISIBILITY === 'public') {
    const pages = (await getPages()) as PageWithMeta[];
    const stories = (await getAllNewsStories()) as NewsStoryWithMeta[];

    const root = process.env.BRANCH_STUDIO_BASE_URL;
    const pageMap = pages.map((p) => {
      const slashes = slashCount(p.path);
      return {
        url: `${root}${p.path}`,
        lastModified: p._updatedAt,
        changeFrequency: slashes <= 1 ? 'monthly' : 'yearly',
        priority: slashes <= 1 ? 1 : slashes === 2 ? 0.5 : 0,
      };
    });

    const storiesMap = stories.map((s) => {
      const recent = isRecent(new Date(s._updatedAt));
      return {
        url: `${root}/news/story/${s.slug.current}`,
        lastModified: s._updatedAt,
        changeFrequency: recent ? 'monthly' : 'never',
        priority: recent ? 1 : 0,
      };
    });

    return pageMap
      .concat(storiesMap)
      .sort((a, b) => a.url.localeCompare(b.url));
  }

  return [];
}
