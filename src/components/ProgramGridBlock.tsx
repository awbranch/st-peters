import React from 'react';
import Block from '@/components/Block';
import RichText from '@/components/RichText';
import { getPrograms } from '@/sanity/sanity-utils';
import { MediaGrid, MediaGridItem } from '@/components/MediaGrid';
import { PortableTextBlock } from 'sanity';

type Props = {
  title: string;
  text: PortableTextBlock[];
};

export default async function ProgramGridBlock({ title, text }: Props) {
  const programs = await getPrograms();

  return (
    <Block color="white">
      <h1 className="text-xl uppercase">{title}</h1>
      <div className="my-4">
        <RichText text={text} />
      </div>
      <MediaGrid>
        {programs.map((p, i) => (
          <MediaGridItem
            key={i}
            href={`/program/${p.slug.current}`}
            title={p.title}
            image={p.introImage}
          />
        ))}
      </MediaGrid>
    </Block>
  );
}
