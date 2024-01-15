import ResponsiveImage from '@/components/ResponsiveImage';
import RichText from '@/components/RichText';
import { toFullDate } from '@/utils/date';
import { getNewsStory, getTopNewsStories } from '@/sanity/sanity-utils';
import { MediaCarousel, MediaCarouselItem } from '@/components/MediaCarousel';
import Section from '@/components/Section';

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
      <Section id="story">
        <h1 className="text-xl">{story.title}</h1>
        <div className="text-sm">{toFullDate(story.date)}</div>
        <ResponsiveImage
          className="w-full mt-2 mb-3"
          image={story.image}
          priority={false}
          sizes={'100vw'}
        />
        <RichText text={story.text} />
      </Section>
      {stories && (
        <Section>
          <h1 className={'text-xl'}>More News</h1>
          <MediaCarousel>
            {stories.slice(0, 3).map((s, i) => (
              <MediaCarouselItem
                key={i}
                href={`/news/story/${s.slug.current}`}
                title={s.title}
                image={s.image}
              ></MediaCarouselItem>
            ))}
          </MediaCarousel>
        </Section>
      )}
    </main>
  );
}
