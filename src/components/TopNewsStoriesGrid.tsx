import React from 'react';
import ResponsiveImage from '@/components/ResponsiveImage';
import Link from 'next/link';
import { Para } from '@/components/Typography';
import { NewsStory } from '@/types/NewsStory';

type Props = {
  stories: NewsStory[];
};

export function TopNewsStoriesGrid({ stories }: Props) {
  return (
    <div className="flex flex-row gap-4 mt-4">
      {' '}
      {stories.map((s, i) => (
        <div key={i} className="w-[300px]">
          <Link
            className={'block'}
            href={`/news/story/${s.slug.current}`}
            title={s.title}
          >
            <ResponsiveImage
              image={s.previewImage}
              priority={false}
              sizes={'33vw'}
              className={'object-cover w-[280px] h-[250px] rounded-xl'}
            />
          </Link>
          <Para className="text-lg mt-3 font-semibold text-center">
            {s.title}
          </Para>
        </div>
      ))}
    </div>
  );
}
