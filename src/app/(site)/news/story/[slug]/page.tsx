import RichText from '@/components/RichText';
import { toFullDate } from '@/utils/date';
import { getNewsStory, getTopNewsStories } from '@/sanity/sanity-utils';
import { MediaCarousel, MediaCarouselItem } from '@/components/MediaCarousel';
import Section from '@/components/Section';
import Container from '@/components/Container';
import BreadCrumbs from '@/components/BreadCrumbs';
import React from 'react';
import { H2, Small } from '@/components/Typography';

export default async function Page({ params }: { params: { slug: string } }) {
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

      <Section id="story" maxWidth="sm">
        <Small className={'mb-8'}>{toFullDate(story.date)}</Small>
        <RichText text={story.text} />
      </Section>
      {stories && (
        <Section maxWidth="sm">
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
