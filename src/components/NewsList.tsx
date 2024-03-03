import React from 'react';
import Section from '@/components/Section';
import { NewsStory } from '@/types/NewsStory';
import ResponsiveImage from '@/components/ResponsiveImage';
import { toShortDate } from '@/utils/date';
import Link from 'next/link';
import { breakpoints, newsStoriesPerPage } from '@/utils/globals';
import Pager from '@/components/Pager';
import { H1 } from '@/components/Typography';

type Props = {
  stories: NewsStory[];
  page: number;
};

export default function NewsList({ stories, page }: Props) {
  const storiesOnPage = getStoriesOnPage(stories, page);
  const pageCount = Math.ceil(stories.length / newsStoriesPerPage);
  const pageSlugs = Array.from({ length: pageCount }, (_, i) =>
    i === 0 ? '/news' : `/news/${i + 1}`,
  );

  return (
    <Section maxWidth="md">
      <H1 className={'mt-0 border-b border-gray-200 pb-4'}>News</H1>

      <div className="my-16 space-y-20 lg:space-y-20">
        {storiesOnPage.map((story) => (
          <article
            key={story._id}
            className="relative isolate flex flex-col gap-8 lg:flex-row"
          >
            <div className="relative aspect-[3/2] sm:aspect-[16/9] lg:aspect-[3/2] lg:w-96 lg:shrink-0">
              <Link href={`/news/story/${story.slug.current}`}>
                <ResponsiveImage
                  image={story.previewImage}
                  className="absolute inset-0 h-full w-full rounded-2xl bg-gray-50 object-cover"
                  sizes={`(max-width: ${breakpoints.lg}px) 100vw, 24rem`}
                />
              </Link>
            </div>
            <div>
              <div className="flex items-center gap-x-4 text-xs">
                <time dateTime={story.date} className="text-gray-500">
                  {toShortDate(story.date)}
                </time>
                {story?.categories?.map((c) => (
                  <span
                    key={c._id}
                    className="z-10 rounded-full bg-gray-100 px-3 py-1.5 font-medium text-gray-600"
                  >
                    {c.label}
                  </span>
                ))}
              </div>
              <div className="max-w-xl">
                <Link href={`/news/story/${story.slug.current}`}>
                  <h3 className="mt-3 text-2xl font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                    {story.title}
                  </h3>
                  <p className="mt-5 text-base leading-relaxed text-gray-600">
                    {story.summary}
                  </p>
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>
      <Pager pages={pageSlugs} current={page - 1} />
    </Section>
  );
}

function getStoriesOnPage(stories: NewsStory[], page: number) {
  const startIndex = (page - 1) * newsStoriesPerPage;
  const endIndex = startIndex + newsStoriesPerPage;

  return stories.slice(startIndex, endIndex);
}
