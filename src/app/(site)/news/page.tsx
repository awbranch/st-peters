import NewsBlock from '@/components/NewsBlock';
import { getAllNewsStories, getNewsCategories } from '@/sanity/sanity-utils';

export default async function News() {
  const stories = await getAllNewsStories();
  const categories = await getNewsCategories();

  return <NewsBlock stories={stories} categories={categories} />;
}
