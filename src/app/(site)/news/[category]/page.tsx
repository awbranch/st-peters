import Block from '@/components/Block';
import NewsCatSelector from '@/components/NewsCatSelector';
import { newsCategories } from '@/utils/globals';
import { getNewsStories } from '@/sanity/sanity-utils';
import StoryCard from '@/components/StoryCard';
import React from 'react';
import { NewsStory } from '@/types/NewsStory';

export function generateStaticParams() {
  return newsCategories.map((c) => ({
    category: c.slug,
  }));
}

type Props = {
  params: {
    category: string;
  };
};

export default async function NewsCategory({ params }: Props) {
  const { category } = params;
  const selectedCategory = newsCategories.find((c) => c.slug === category);

  let stories: NewsStory[];
  if (selectedCategory.slug === 'upcoming-events') {
    stories = await getNewsStories('event', 'future');
  } else if (selectedCategory.slug === 'past-events') {
    stories = await getNewsStories('event', 'past');
  } else {
    stories = await getNewsStories(selectedCategory.sanityCategory);
  }

  return (
    <main>
      <Block>
        <NewsCatSelector selected={category} />
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
