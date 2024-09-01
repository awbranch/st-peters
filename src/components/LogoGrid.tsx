import React from 'react';
import { LogoGrid as Props } from '@/types/LogoGrid';
import ResponsiveImage from '@/components/ResponsiveImage';
import { twJoin } from 'tailwind-merge';

export default async function LogoGrid({ columns = 2, items }: Props) {
  return (
    <ul
      role="list"
      className={twJoin(
        'mx-auto grid gap-4 max-w-[250px] xs:max-w-full',
        columns === 3 && 'grid-cols-1 xs:grid-cols-2 sm:grid-cols-3',
        columns === 4 &&
          'grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4',
        columns === 5 &&
          'grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5',
        columns === 6 &&
          'grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-6',
      )}
    >
      {items.map((i) => (
        <figure key={i._key}>
          <ResponsiveImage
            image={i.image}
            priority={false}
            sizes={`100vw`}
            className="aspect-[2/1] w-full object-contain bg-white p-3"
          />
          {i.image.caption && (
            <figcaption
              className={'block text-sm text-center font-medium mt-2'}
            >
              {i.image.caption}
            </figcaption>
          )}
        </figure>
      ))}
    </ul>
  );
}
