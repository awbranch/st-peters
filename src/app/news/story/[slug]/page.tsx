import { toFullDate } from '@/utils/date';
import { getNewsStories, urlFor } from '@/utils/sanity';
import { TopNewsStoriesGrid } from '@/components/TopNewsStoriesGrid';
import Section from '@/components/Section';
import Container from '@/components/Container';
import BreadCrumbs from '@/components/BreadCrumbs';
import React from 'react';
import { H1, H2, Small } from '@/components/Typography';
import ComponentList from '@/components/ComponentList';
import { Metadata } from 'next';
import RichText from '@/components/RichText';
import { NewsStory } from '@/types/NewsStory';
import { Palette } from '@/types/Palette';
import { socialMediaImageDimensions } from '@/utils/globals';

// This line should be removed if exporting static pages
export const dynamicParams = false;

export async function generateStaticParams() {
  const stories = await getNewsStories();
  return stories.map((s) => ({ slug: s.slug.current }));
}

type Props = {
  params: { slug: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const stories = await getNewsStories();
  const story = stories.find((s) => s.slug.current === params.slug);
  const path = `/news/story/${params.slug}`;

  let meta: Metadata = {
    alternates: {
      canonical: path,
    },
  };

  if (story) {
    const title = story.title
      ? `${story.title} - St. Peter's Kitchen`
      : "St. Peter's Kitchen";

    meta.title = title;

    if (story.summary) {
      meta.description = story.summary;
    }

    if (story.previewImage) {
      const { width, height } = socialMediaImageDimensions;
      meta.openGraph = {
        title: title,
        type: 'website',
        url: path,
        images: urlFor(story.previewImage)
          .fit('fill')
          .width(width)
          .height(height)
          .url(),
      };
    }
  }

  return meta;
}

export default async function Page({ params }: Props) {
  // Its actually more efficient to get all the news stories since this is calculated
  // at build time and Next caches all query requests with the same parameters
  // Calling this would actually result in a separate API call to sanity
  const stories = await getNewsStories();
  const story = stories.find((s) => s.slug.current === params.slug);

  if (!story) {
    return (
      <main>
        <Section palette={'white'} maxWidth={'md'}>
          <H1>Story: {params.slug} Not Found</H1>
        </Section>
      </main>
    );
  }

  const topStories = stories
    .filter((s) => s.slug.current !== story.slug.current)
    .slice(0, 3);

  addPalette(story, 'white');

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
        <RichText text={story.text} palette={'white'} />
        {story.components && (
          <div className={'mt-12'}>
            <ComponentList components={story.components} />
          </div>
        )}
      </Section>

      {story?.blocks?.map((b) => (
        <Section
          key={b._key}
          id={b.id?.current}
          palette={b.palette}
          maxWidth={'md'}
        >
          {b?.components && <ComponentList components={b.components} />}
        </Section>
      ))}

      {stories && (
        <Section maxWidth="md">
          <H2>More News</H2>
          <TopNewsStoriesGrid stories={topStories} />
        </Section>
      )}
    </main>
  );
}

function addPalette(story: NewsStory, palette: Palette) {
  if (story.components) {
    story.components.forEach((s) => (s.palette = palette));
  }
  if (story.blocks) {
    story.blocks.forEach((b) => {
      if (b.components) {
        b.components.forEach((c) => (c.palette = b.palette));
      }
    });
  }
}
