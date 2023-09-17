import Block from '@/components/Block';
import { getCurrentEvents } from '@/sanity/sanity-utils';
import EventCard from '@/components/EventCard';

export default async function News() {
  let events = await getCurrentEvents();

  return (
    <main>
      <Block color="white">
        {events.map((e) => (
          <div key={e.slug.current} className={'py-2 border-t border-gray-100'}>
            <EventCard event={e} />
          </div>
        ))}
      </Block>
    </main>
  );
}
