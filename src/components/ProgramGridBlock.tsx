import React from 'react';
import Block from '@/components/Block';

import { ProgramGrid } from '@/types/ProgramGrid';
import RichText from '@/components/RichText';
import ResponsiveImage from '@/components/ResponsiveImage';
import { breakpoints } from '@/utils/globals';

interface Props {
  programGrid: ProgramGrid;
}

export default function ProgramGridBlock({ programGrid }: Props) {
  console.log(programGrid.programs);

  return (
    <Block bg="white">
      <h1 className="text-xl uppercase">{programGrid.title}</h1>
      <div className="mt-4">
        <RichText document={programGrid.text} />
      </div>
      <div className="grid grid-cols-3 gap-4">
        {programGrid.programs.map((p, i) => (
          <div key={i}>
            <div
              style={{
                width: '300px',
                height: '300px',
              }}
            >
              <ResponsiveImage
                image={p.introImage}
                priority={false}
                sizes={'33vw'}
                className={'object-cover h-full'}
              />
            </div>
            <h2 className="text-lg text-center mt-1">{p.title}</h2>
          </div>
        ))}
      </div>
    </Block>
  );
}
