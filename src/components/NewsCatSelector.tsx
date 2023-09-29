import React, { Fragment } from 'react';
import LinkButton from '@/components/LinkButton';
import { getNewsCategories, NewsStoryTimeRange } from '@/sanity/sanity-utils';

type Props = {
  selected: string;
  timeRange: NewsStoryTimeRange;
};

export default async function NewsCatSelector({ selected, timeRange }: Props) {
  const newsCategories = await getNewsCategories();

  return (
    <div className="flex flex-row gap-2">
      {newsCategories.map((c) =>
        c.name.current === 'events' ? (
          <Fragment key={c.name.current}>
            <Btn
              name={'Upcoming Events'}
              selected={selected === 'events' && timeRange === 'future'}
              href={'/news?category=upcoming-events'}
            />
            <Btn
              name={'Past Events'}
              selected={selected === 'events' && timeRange === 'past'}
              href={'/news?category=past-events'}
            />
          </Fragment>
        ) : (
          <Btn
            key={c.name.current}
            name={c.title}
            selected={selected === c.name.current}
            href={`/news?category=${c.name.current}`}
          />
        ),
      )}
    </div>
  );
}

type BtnProps = {
  name: string;
  selected: boolean;
  href: string;
};

function Btn({ name, selected, href }: BtnProps) {
  return (
    <LinkButton
      href={href}
      color={'blue'}
      size={'small'}
      variant={selected ? 'solid' : 'outline'}
    >
      {name}
    </LinkButton>
  );
}
