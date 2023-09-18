import React from 'react';
import LinkButton from '@/components/LinkButton';

interface Props {
  selected: 'upcoming-events' | 'past-events' | 'stories';
}

export default function EventCatBtnGrp({ selected }: Props) {
  return (
    <div className="flex flex-row gap-2">
      <LinkButton
        href={'/news'}
        color={'blue'}
        size={'small'}
        variant={selected === 'upcoming-events' ? 'solid' : 'outline'}
      >
        Upcoming Events
      </LinkButton>
      <LinkButton
        href={'/news/past-events'}
        color={'blue'}
        size={'small'}
        variant={selected === 'past-events' ? 'solid' : 'outline'}
      >
        Past Events
      </LinkButton>
      <LinkButton
        href={'/news/stories'}
        color={'blue'}
        size={'small'}
        variant={selected === 'stories' ? 'solid' : 'outline'}
      >
        Stories
      </LinkButton>
    </div>
  );
}
