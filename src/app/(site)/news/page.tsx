import NewsBlock from '@/components/NewsBlock';
import { getAllNewsStories } from '@/sanity/sanity-utils';

export default async function News() {
  const stories = await getAllNewsStories();

  return <NewsBlock stories={stories} />;
}
