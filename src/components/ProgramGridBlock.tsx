import React from 'react';
import Block from '@/components/Block';

import { ProgramGrid } from '@/types/ProgramGrid';
import RichText from '@/components/RichText';

interface Props {
  programGrid: ProgramGrid;
}

export default function ProgramGridBlock({ programGrid }: Props) {
  return (
    <Block bg="white">
      <h1 className="text-xl uppercase">{programGrid.title}</h1>
      <div className="mt-4">
        <RichText document={programGrid.text} />
      </div>
      <div className="min-h-[400px]"></div>
    </Block>
  );
}
