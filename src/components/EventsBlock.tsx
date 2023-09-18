import React from 'react';
import EventCard from '@/components/EventCard';
import Block from '@/components/Block';
import { Event } from '@/types/Event';
import EventCatBtnGrp from '@/components/EventCatBtnGrp';

interface Props {
  events: Event[];
  selected: 'upcoming-events' | 'past-events' | 'stories';
}

export default function EventsBlock({ events, selected }: Props) {
  return (
    <Block>
      <EventCatBtnGrp selected={selected} />
      <div className={'mt-2'}>
        {events &&
          events.map((e) => (
            <div
              key={e.slug.current}
              className={'py-2 border-t border-gray-100'}
            >
              <EventCard event={e} />
            </div>
          ))}
      </div>
    </Block>
  );
}
