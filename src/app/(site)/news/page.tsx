import { getCurrentEvents } from '@/sanity/sanity-utils';
import EventsBlock from '@/components/EventsBlock';

export default async function News() {
  const events = await getCurrentEvents();

  return (
    <main>
      <EventsBlock events={events} selected={'upcoming-events'} />
    </main>
  );
}
