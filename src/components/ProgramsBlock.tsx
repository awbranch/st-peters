import React from 'react';
import { getPrograms } from '@/sanity/sanity-utils';
import { ProgramCard } from '@/components/ProgramCard';
import { ProgramsBlock as Props } from '@/types/ProgramsBlock';

export default async function ProgramsBlock({ id }: Props) {
  const programs = await getPrograms();

  return (
    <div id={id?.current}>
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
        {programs.map((p, i) => (
          <ProgramCard
            key={i}
            href={`/program/${p.slug.current}`}
            title={p.title}
            image={p.image}
          />
        ))}
      </div>
    </div>
  );
}
