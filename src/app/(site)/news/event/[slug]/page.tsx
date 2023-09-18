import { getEvent } from '@/sanity/sanity-utils';
import Block from '@/components/Block';
import ResponsiveImage from '@/components/ResponsiveImage';
import RichText from '@/components/RichText';
import React from 'react';
import DonationRequestBlock from '@/components/DonationRequestBlock';
import LinkButton from '@/components/LinkButton';
import { toFullDate } from '@/utils/date';

export default async function Page({ params }: { params: { slug: string } }) {
  const event = await getEvent(params.slug);

  return (
    <main>
      <section id="program">
        <Block color={'white'}>
          <LinkButton
            href="/news"
            size={'small'}
            icon={'left'}
            variant={'text'}
          >
            NEWS
          </LinkButton>
          <h1 className="text-xl uppercase">{event.title}</h1>
          <div className="text-sm">{toFullDate(event.date)}</div>
          <ResponsiveImage
            className="w-full mt-2 mb-3"
            image={event.image}
            priority={true}
            sizes={'100vw'}
          />
          <RichText document={event.text} />
        </Block>
      </section>
      {event.donationRequest && (
        <section id="donation-request">
          <DonationRequestBlock
            color="blue"
            orientation="right"
            request={event.donationRequest}
          />
        </section>
      )}
    </main>
  );
}
