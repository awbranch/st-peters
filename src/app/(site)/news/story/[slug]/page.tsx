import RichText from '@/components/RichText';
import { toFullDate } from '@/utils/date';
import {
  getAllNewsStories,
  getNewsStory,
  getTopNewsStories,
} from '@/sanity/sanity-utils';
import { MediaCarousel, MediaCarouselItem } from '@/components/MediaCarousel';
import Section from '@/components/Section';
import Container from '@/components/Container';
import BreadCrumbs from '@/components/BreadCrumbs';
import React from 'react';
import { H2, Small } from '@/components/Typography';
import BlockList from '@/components/BlockList';
import { Metadata } from 'next';

export async function generateStaticParams() {
  const stories = await getAllNewsStories();
  return stories.map((s) => ({ slug: s.slug.current }));
}

type Props = {
  params: { slug: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const story = await getNewsStory(params.slug);

  return {
    title: story.title ? `${story.title} - St. Peter's Kitchen` : undefined,
    description: story?.summary,
  };
}

export default async function Page({ params }: Props) {
  const story = await getNewsStory(params.slug);

  // Get 13 most recent news stories
  const topStories = await getTopNewsStories(13);

  // Remove this story from the list
  const stories = topStories.filter(
    (s) => s.slug.current !== story.slug.current,
  );

  return (
    <main>
      <Container maxWidth={'lg'}>
        <BreadCrumbs
          routes={[
            { name: 'News', path: '/news' },
            { name: story.title, path: `/news/story/${story.slug.current}` },
          ]}
        />
      </Container>

      <Section id="story" maxWidth="md">
        <Small className={'mb-8'}>{toFullDate(story.date)}</Small>
        <RichText text={story.text} />
      </Section>

      {story?.sections?.map((s) => (
        <Section
          key={s.id?.current}
          id={s.id?.current}
          color={s?.background?.label}
          maxWidth={'md'}
        >
          {s?.blocks && <BlockList blocks={s.blocks} />}
        </Section>
      ))}

      {stories && (
        <Section maxWidth="md">
          <H2>More News</H2>
          <MediaCarousel>
            {stories.slice(0, 3).map((s, i) => (
              <MediaCarouselItem
                key={i}
                href={`/news/story/${s.slug.current}`}
                title={s.title}
                image={s.previewImage}
              ></MediaCarouselItem>
            ))}
          </MediaCarousel>
        </Section>
      )}
    </main>
  );
}
