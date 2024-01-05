import ResponsiveImage from '@/components/ResponsiveImage';
import RichText from '@/components/RichText';
import DonationRequestBlock from '@/components/DonationRequestBlock';
import LinkButton from '@/components/LinkButton';
import { isPast, toFullDate } from '@/utils/date';
import { getNewsStory, getTopNewsStories } from '@/sanity/sanity-utils';
import { MediaCarousel, MediaCarouselItem } from '@/components/MediaCarousel';
import { NewsCategory } from '@/types/NewsCategory';
import { newsCategories } from '@/utils/globals';
import Section from '@/components/Section';

export default async function Page({ params }: { params: { slug: string } }) {
  const story = await getNewsStory(params.slug);
  let parent: NewsCategory;
  if (story.category === 'event') {
    if (isPast(story.date)) {
      parent = newsCategories.find((c) => c.slug === 'past-events');
    } else {
      parent = newsCategories.find((c) => c.slug === 'upcoming-events');
    }
  } else {
    parent = newsCategories.find((nc) => nc.sanityCategory === story.category);
  }

  // Get 13 most recent news stories
  const topStories = await getTopNewsStories(13);

  // Remove this story from the list
  const stories = topStories.filter(
    (s) => s.slug.current !== story.slug.current,
  );

  return (
    <main>
      <Section id="story">
        {parent && (
          <LinkButton
            href={`/news/${parent.slug}`}
            size={'small'}
            icon={'left'}
            variant={'solid'}
          >
            {parent.name}
          </LinkButton>
        )}
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
      {story.donationRequests &&
        story.donationRequests.map((d) => (
          <DonationRequestBlock key={d._key} {...d} />
        ))}
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
