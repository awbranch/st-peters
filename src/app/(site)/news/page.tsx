import Block from '@/components/Block';
import NewsCatSelector from '@/components/NewsCatSelector';
import {
  getNewsCategory,
  getNewsStories,
  NewsStoryTimeRange,
} from '@/sanity/sanity-utils';
import StoryCard from '@/components/StoryCard';
import React from 'react';

type Props = {
  searchParams: {
    category: string;
  };
};

export default async function News({ searchParams }: Props) {
  let category = searchParams.category || 'upcoming-events';
  let timeRange: NewsStoryTimeRange = 'all';
  if (category.startsWith('upcoming-')) {
    category = category.slice(9);
    timeRange = 'future';
  } else if (category.startsWith('past-')) {
    category = category.slice(5);
    timeRange = 'past';
  }

  // See if it is a valid category
  const newsCategory = await getNewsCategory(category);
  if (!newsCategory) {
    category = 'events';
    timeRange = 'future';
  }

  const stories = await getNewsStories(category, timeRange);
  return (
    <main>
      <Block>
        <NewsCatSelector selected={category} timeRange={timeRange} />
        <div className="mt-3">
          {stories &&
            stories.map((s) => (
              <div
                key={s.slug.current}
                className={'py-2 border-t border-gray-100'}
              >
                <StoryCard story={s} />
              </div>
            ))}
        </div>
      </Block>
    </main>
  );
}
