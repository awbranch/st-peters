import NewsBlock from '@/components/NewsList';
import { getAllNewsStories, getNewsCategories } from '@/utils/sanity-utils';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "News - St. Peter's Kitchen",
  alternates: {
    canonical: '/news',
  },
};

export default async function News() {
  const stories = await getAllNewsStories();
  const categories = await getNewsCategories();

  return <NewsBlock stories={stories} categories={categories} />;
}
