import Block from '@/components/Block';
import ResponsiveImage from '@/components/ResponsiveImage';
import RichText from '@/components/RichText';
import DonationRequestBlock from '@/components/DonationRequestBlock';
import LinkButton from '@/components/LinkButton';
import { isPast, toFullDate } from '@/utils/date';
import { getNewsStory, getTopNewsStories } from '@/sanity/sanity-utils';
import { MediaCarousel, MediaCarouselItem } from '@/components/MediaCarousel';
import { NewsCategory } from '@/types/NewsCategory';
import { newsCategories } from '@/utils/globals';

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
      <section id="story">
        <Block color={'white'}>
          {parent && (
            <LinkButton
              href={`/news/${parent.slug}`}
              size={'small'}
              icon={'left'}
              variant={'text'}
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

          {story.actions && (
            <div className="flex flex-row gap-2 mt-8 justify-center">
              {story.actions.map((a, i) => (
                <LinkButton
                  key={i}
                  href={a.link}
                  color={'pink'}
                  size={'small'}
                  variant={i === 0 ? 'solid' : 'outline'}
                >
                  {a.name}
                </LinkButton>
              ))}
            </div>
          )}
        </Block>
      </section>
      {story.donationRequestBlock && (
        <DonationRequestBlock {...story.donationRequestBlock} />
      )}
      {stories && (
        <section>
          <Block>
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
          </Block>
        </section>
      )}
    </main>
  );
}
