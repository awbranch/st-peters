import EventCatBtnGrp from '@/components/EventCatBtnGrp';
import Block from '@/components/Block';

export default async function News() {
  return (
    <main>
      <Block>
        <EventCatBtnGrp selected={'stories'} />
        <div className={'mt-2'}>STORIES GO HERE</div>
      </Block>
    </main>
  );
}
