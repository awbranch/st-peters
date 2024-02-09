import NewsList from '@/components/NewsList';
import { getNewsStories } from '@/utils/sanity-utils';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "News - St. Peter's Kitchen",
  alternates: {
    canonical: '/news',
  },
};

export default async function News() {
  const stories = await getNewsStories();
  return <NewsList stories={stories} page={1} />;
}
