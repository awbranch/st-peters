import React from 'react';
import { NewsStory } from '@/types/NewsStory';
import LinkButton from '@/components/LinkButton';
import { toFullDate } from '@/utils/date';
import SimpleText from '@/components/SimpleText';
import ResponsiveImage from '@/components/ResponsiveImage';
import Link from 'next/link';

type Props = {
  story: NewsStory;
};

export default function StoryCard({ story }: Props) {
  return (
    <div className="flex flex-row gap-3">
      <div className="min-w-[255px]">
        <Link href={`/news/story/${story.slug.current}`}>
          <ResponsiveImage
            image={story.image}
            sizes={'100vw'}
            className={'object-cover w-[255px] h-[200px]'}
          />
        </Link>
      </div>
      <div>
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
