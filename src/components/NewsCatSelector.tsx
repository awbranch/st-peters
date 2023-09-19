import React from 'react';
import LinkButton from '@/components/LinkButton';
import { newsCategories } from '@/utils/globals';

interface Props {
  selected: string;
}

export default function NewsCatSelector({ selected }: Props) {
  return (
    <div className="flex flex-row gap-2">
      {newsCategories.map((c) => (
        <LinkButton
          key={c.slug}
          href={`/news/${c.slug}`}
          color={'blue'}
          size={'small'}
          variant={selected === c.slug ? 'solid' : 'outline'}
        >
          {c.name}
        </LinkButton>
      ))}
    </div>
  );
}
