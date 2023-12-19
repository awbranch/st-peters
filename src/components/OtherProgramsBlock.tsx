import React from 'react';
import Block from '@/components/Block';
import { getPrograms } from '@/sanity/sanity-utils';
import ProgramsSlider from '@/components/ProgramsSlider';

type Props = {
  title: string;
  besides: string;
};

export default async function OtherProgramsBlock({ title, besides }: Props) {
  const programs = (await getPrograms()).filter(
    (p) => p.slug.current !== besides,
  );

  return (
    <Block color="white">
      <h1 className="text-xl">{title}</h1>
      <ProgramsSlider programs={programs} />
    </Block>
  );
}
