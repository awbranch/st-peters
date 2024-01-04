import React from 'react';
import RichText from '@/components/RichText';
import Link from 'next/link';
import ResponsiveImage from '@/components/ResponsiveImage';
import { breakpoints } from '@/utils/globals';
import { TeamBlock } from '@/types/TeamBlock';

export default function TeamBlock({
  id,
  text,
  staffPhoto,
  staffLabel,
  boardPhoto,
  boardLabel,
}: TeamBlock) {
  return (
    <div id={id?.current}>
      <RichText text={text} />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-4">
        {[
          { photo: staffPhoto, label: staffLabel, slug: 'staff' },
          { photo: boardPhoto, label: boardLabel, slug: 'board' },
        ].map((g) => (
          <Link
            key={g.slug}
            className={'block group shadow-airy p-2 rounded-md'}
            href={`/${g.slug}`}
            title={g.label}
          >
            <ResponsiveImage
              image={g.photo}
              priority={false}
              sizes={`(min-width: ${breakpoints.lg}px) 50vw, 100vw`}
              className={
                'w-full h-[340px] ease-in-out duration-200 hover:scale-105'
              }
            />
            <h2 className="text-base font-bold mt-2 text-center group-hover:text-sunset">
              {g.label}
            </h2>
          </Link>
        ))}
      </div>
    </div>
  );
}
