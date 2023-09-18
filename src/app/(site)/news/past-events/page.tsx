import { getPastEvents } from '@/sanity/sanity-utils';
import EventsBlock from '@/components/EventsBlock';

export default async function News() {
  const events = await getPastEvents();

  return (
    <main>
      <EventsBlock events={events} selected={'past-events'} />
    </main>
  );
}
