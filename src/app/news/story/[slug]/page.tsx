import { toFullDate } from '@/utils/date';
import {
  getAllNewsStories,
  getNewsStory,
  getTopNewsStories,
} from '@/utils/sanity-utils';
import { MediaCarousel, MediaCarouselItem } from '@/components/MediaCarousel';
import Section from '@/components/Section';
import Container from '@/components/Container';
import BreadCrumbs from '@/components/BreadCrumbs';
import React from 'react';
import { H2, Small } from '@/components/Typography';
import ComponentList from '@/components/ComponentList';
import { Metadata } from 'next';
import RichText from '@/components/RichText';

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
    alternates: {
      canonical: `/news/story/${params.slug}`,
    },
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
        {story.components && (
          <div className={'mt-12'}>
            <ComponentList components={story.components} />
          </div>
        )}
      </Section>

      {story?.blocks?.map((b) => (
        <Section
          key={b.id?.current}
          id={b.id?.current}
          color={b?.background?.label}
          maxWidth={'md'}
        >
          {b?.components && <ComponentList components={b.components} />}
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
