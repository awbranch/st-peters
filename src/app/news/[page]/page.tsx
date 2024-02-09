import { Metadata } from 'next';
import { newsStoriesPerPage } from '@/utils/globals';
import React from 'react';
import { getNewsStories } from '@/utils/sanity-utils';
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
  return {
    title: `Page ${params.page} - News - St. Peter's Kitchen`,
    alternates: {
      canonical: `/news/${params.page}`,
    },
  };
}

export default async function News({ params }: Props) {
  const stories = await getNewsStories();

  return <NewsList stories={stories} page={Number(params.page)} />;
}
