import NewsList from '@/components/NewsList';
import { getHeader, getNewsStories, urlFor } from '@/utils/sanity';
import { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
  const { socialImage } = await getHeader();
  const path = '/news';

  let meta: Metadata = {
    title: "News - St. Peter's Kitchen",
    alternates: {
      canonical: path,
    },
  };

  if (socialImage) {
    const title = "St. Peter's Kitchen - News";
    meta.openGraph = {
      title: title,
      type: 'website',
      url: path,
      images: urlFor(socialImage).url(),
    };
  }

  return meta;
}

export default async function News() {
  const stories = await getNewsStories();
  return <NewsList stories={stories} page={1} />;
}
