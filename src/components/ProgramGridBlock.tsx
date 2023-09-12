import React from 'react';
import Block from '@/components/Block';

import { ProgramGrid } from '@/types/ProgramGrid';
import RichText from '@/components/RichText';
import ResponsiveImage from '@/components/ResponsiveImage';
import Link from 'next/link';

interface Props {
  programGrid: ProgramGrid;
}

export default function ProgramGridBlock({ programGrid }: Props) {
  return (
    <Block color="white">
      <h1 className="text-xl uppercase">{programGrid.title}</h1>
      <div className="mt-4">
        <RichText document={programGrid.text} />
      </div>
      <div className="grid grid-cols-3 gap-4 mt-4">
        {programGrid.programs.map((p, i) => (
          <div key={i} style={{ width: '300px' }}>
            <div
              style={{
                height: '300px',
              }}
            >
              <Link href={`/program/${p.slug.current}`} title={p.title}>
                <ResponsiveImage
                  image={p.introImage}
                  priority={false}
                  sizes={'33vw'}
                  className={'object-cover h-full'}
                />
              </Link>
            </div>
            <h2 className="text-lg mt-1 text-center">{p.title}</h2>
          </div>
        ))}
      </div>
    </Block>
  );
}
