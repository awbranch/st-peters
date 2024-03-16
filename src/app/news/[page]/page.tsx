import { Metadata } from 'next';
import {
  newsStoriesPerPage,
  socialMediaImageDimensions,
} from '@/utils/globals';
import React from 'react';
import { getHeader, getNewsStories, getSettings, urlFor } from '@/utils/sanity';
import NewsList from '@/components/NewsList';

export const dynamicParams = false;

export async function generateStaticParams() {
  // The first page of news will be at the /news route
  // The remaining pages of news will be at /news/2, /news/3 etc
  const stories = await getNewsStories();
  const pages = Math.ceil(stories.length / newsStoriesPerPage);
  return Array.from({ length: pages - 1 }, (_, i) => ({
    page: `${i + 2}`,
  }));
}

type Props = {
  params: { page: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const settings = await getSettings();
  const { socialImage } = await getHeader();
  const path = `/news/${params.page}`;

  let meta: Metadata = {
    title: `Page ${params.page} - News - ${settings.title}`,
    alternates: {
      canonical: path,
    },
  };

  if (socialImage) {
    const { width, height } = socialMediaImageDimensions;
    meta.openGraph = {
      title: `${settings.title} - News - Page ${params.page}`,
      type: 'website',
      url: path,
      images: urlFor(socialImage).fit('fill').width(width).height(height).url(),
    };
  }

  return meta;
}

export default async function News({ params }: Props) {
  const stories = await getNewsStories();

  return <NewsList stories={stories} page={Number(params.page)} />;
}
