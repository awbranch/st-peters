import React from 'react';
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
    <div>
      <h1 className="text-xl">{title}</h1>
      <ProgramsSlider programs={programs} />
    </div>
  );
}
