import React from 'react';
import Block from '@/components/Block';
import RichText from '@/components/RichText';
import { getPrograms } from '@/sanity/sanity-utils';
import { PortableTextBlock } from 'sanity';
import ProgramsSlider from '@/components/ProgramsSlider';

type Props = {
  title: string;
  text: PortableTextBlock[];
  besides: string;
};

export default async function OtherProgramsBlock({
  title,
  text,
  besides,
}: Props) {
  const programs = (await getPrograms()).filter(
    (p) => p.slug.current !== besides,
  );

  return (
    <Block color="white">
      <h1 className="text-xl">{title}</h1>
      <div className="mt-4 mb-6">
        <RichText text={text} />
      </div>
      <ProgramsSlider programs={programs} />
    </Block>
  );
}
