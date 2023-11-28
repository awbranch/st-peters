import React from 'react';
import Block from '@/components/Block';
import RichText from '@/components/RichText';
import { getPrograms } from '@/sanity/sanity-utils';
import { ProgramCard } from '@/components/ProgramCard';
import { PortableTextBlock } from 'sanity';

type Props = {
  title: string;
  text: PortableTextBlock[];
};

export default async function ProgramGridBlock({ title, text }: Props) {
  const programs = await getPrograms();

  return (
    <Block color="white">
      <h1 className="text-xl">{title}</h1>
      <div className="mt-4 mb-6">
        <RichText text={text} />
      </div>
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
    </Block>
  );
}
