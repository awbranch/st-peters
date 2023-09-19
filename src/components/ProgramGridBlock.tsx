import React from 'react';
import Block from '@/components/Block';
import { ProgramGrid } from '@/types/ProgramGrid';
import RichText from '@/components/RichText';
import { getPrograms } from '@/sanity/sanity-utils';
import { MediaGrid, MediaGridItem } from '@/components/MediaGrid';

interface Props {
  programGrid: ProgramGrid;
}

export default async function ProgramGridBlock({ programGrid }: Props) {
  const programs = await getPrograms();

  return (
    <Block color="white">
      <h1 className="text-xl uppercase">{programGrid.title}</h1>
      <div className="my-4">
        <RichText document={programGrid.text} />
      </div>
      <MediaGrid>
        {programs.map((p, i) => (
          <MediaGridItem
            key={i}
            href={p.slug.current}
            title={p.title}
            image={p.introImage}
          />
        ))}
      </MediaGrid>
    </Block>
  );
}
