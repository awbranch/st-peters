import React from 'react';
import { Event } from '@/types/Event';
import LinkButton from '@/components/LinkButton';
import { toFullDate } from '@/utils/date';
import SimpleText from '@/components/SimpleText';
import ResponsiveImage from '@/components/ResponsiveImage';
import Link from 'next/link';

interface Props {
  event: Event;
}

export default function EventCard({ event }: Props) {
  return (
    <div className="flex flex-row gap-3">
      <div className="min-w-[255px]">
        <Link href={`/news/event/${event.slug.current}`}>
          <ResponsiveImage
            image={event.image}
            sizes={'100vw'}
            className={'object-cover w-[255px] h-[200px]'}
          />
        </Link>
      </div>
      <div>
        <h2 className="text-lg">{event.title}</h2>
        <div className="text-sm mt-1">{toFullDate(event.date)}</div>
        <div className="mt-2">
          <SimpleText text={event.description}></SimpleText>
        </div>
        <LinkButton
          href={`/news/event/${event.slug.current}`}
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
