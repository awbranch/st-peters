import NewsBlock from '@/components/NewsBlock';
import { getAllNewsStories, getNewsCategories } from '@/sanity/sanity-utils';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "News - St. Peter's Kitchen",
};

export default async function News() {
  const stories = await getAllNewsStories();
  const categories = await getNewsCategories();

  return <NewsBlock stories={stories} categories={categories} />;
}
