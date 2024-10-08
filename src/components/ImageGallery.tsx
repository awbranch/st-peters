import React from 'react';
import { ImageGallery as Props } from '@/types/ImageGallery';
import ResponsiveImage from '@/components/ResponsiveImage';
import { twJoin } from 'tailwind-merge';

export default async function ImageGallery({ columns = 2, items }: Props) {
  return (
    <ul
      role="list"
      className={twJoin(
        'mx-auto grid gap-6',
        columns === 2 && 'grid-cols-1 xs:grid-cols-2',
        columns === 3 && 'grid-cols-1 xs:grid-cols-2 sm:grid-cols-3',
        columns === 4 &&
          'grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4',
      )}
    >
      {items.map((i) => (
        <figure key={i._key}>
          <ResponsiveImage
            image={i.image}
            priority={false}
            sizes={`100vw`}
            className="aspect-square w-full rounded-2xl object-cover"
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
