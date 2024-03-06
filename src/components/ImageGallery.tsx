import React from 'react';
import { ImageGallery as Props } from '@/types/ImageGallery';
import ResponsiveImage from '@/components/ResponsiveImage';

export default async function ImageGallery({ items }: Props) {
  return (
    <ul
      role="list"
      className="mx-auto grid grid-cols-1 xs:grid-cols-2  gap-x-5 gap-y-8  sm:gap-x-8 sm:gap-y-12 md:gap-x-10 md:gap-y-14"
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
