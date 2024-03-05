import NewsList from '@/components/NewsList';
import { getHeader, getNewsStories, urlFor } from '@/utils/sanity';
import { Metadata } from 'next';
import { socialMediaImageDimensions } from '@/utils/globals';

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
    const { width, height } = socialMediaImageDimensions;
    meta.openGraph = {
      title: "St. Peter's Kitchen - News",
      type: 'website',
      url: path,
      images: urlFor(socialImage).fit('fill').width(width).height(height).url(),
    };
  }

  return meta;
}

export default async function News() {
  const stories = await getNewsStories();
  return <NewsList stories={stories} page={1} />;
}
