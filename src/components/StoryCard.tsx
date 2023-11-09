import React from 'react';
import { NewsStory } from '@/types/NewsStory';
import LinkButton from '@/components/LinkButton';
import { toFullDate } from '@/utils/date';
import SimpleText from '@/components/SimpleText';
import ResponsiveImage from '@/components/ResponsiveImage';
import Link from 'next/link';
import { breakpoints } from '@/utils/globals';

type Props = {
  story: NewsStory;
};

export default function StoryCard({ story }: Props) {
  return (
    <div className="flex flex-col gap-1 md:flex-row md:gap-3">
      <div className="flex-1 md:max-w-[360px]">
        <Link href={`/news/story/${story.slug.current}`}>
          <ResponsiveImage
            image={story.image}
            sizes={`(min-width: ${breakpoints.md}px) 360px, 100vw`}
          />
        </Link>
      </div>
      <div className="flex-1">
        <h2 className="text-lg">{story.title}</h2>
        <div className="text-sm mt-1">{toFullDate(story.date)}</div>
        <div className="mt-2">
          <SimpleText text={story.description}></SimpleText>
        </div>
        <LinkButton
          href={`/news/story/${story.slug.current}`}
          color={'pink'}
          size={'small'}
          variant={'text'}
          icon={'right'}
        >
          Find Out More
        </LinkButton>
      </div>
    </div>
  );
}
