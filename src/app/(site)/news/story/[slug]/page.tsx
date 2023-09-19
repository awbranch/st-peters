import { getNewsStory } from '@/sanity/sanity-utils';
import Block from '@/components/Block';
import ResponsiveImage from '@/components/ResponsiveImage';
import RichText from '@/components/RichText';
import React from 'react';
import DonationRequestBlock from '@/components/DonationRequestBlock';
import LinkButton from '@/components/LinkButton';
import { toFullDate } from '@/utils/date';

export default async function Page({ params }: { params: { slug: string } }) {
  const story = await getNewsStory(params.slug);

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
          <h1 className="text-xl uppercase">{story.title}</h1>
          <div className="text-sm">{toFullDate(story.date)}</div>
          <ResponsiveImage
            className="w-full mt-2 mb-3"
            image={story.image}
            priority={true}
            sizes={'100vw'}
          />
          <RichText document={story.text} />
        </Block>
      </section>
      {story.donationRequest && (
        <section id="donation-request">
          <DonationRequestBlock
            color="blue"
            orientation="right"
            request={story.donationRequest}
          />
        </section>
      )}
    </main>
  );
}
