import React from 'react';
import { ImageTileGrid as Props } from '@/types/ImageTileGrid';
import ResponsiveImage from '@/components/ResponsiveImage';
import Link from 'next/link';
import { breakpoints } from '@/utils/globals';

export default async function ImageTileGrid({ images }: Props) {
  return (
    <ul
      role="list"
      className="mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-20"
    >
      {images.map((tile) => (
        <li key={tile._key}>
          <Link href={tile.url} className={'group'}>
            <ResponsiveImage
              image={tile.image}
              priority={false}
              sizes={`(max-width: ${breakpoints.sm}px) 100vw, (max-width: ${breakpoints.lg}px) 50vw, 33vw`}
              className="aspect-square w-full rounded-2xl object-cover"
            />
            <h3 className="mt-4 text-lg font-semibold leading-8 text-center underline-offset-4 group-hover:underline">
              {tile.label}
            </h3>
          </Link>
        </li>
      ))}
    </ul>
  );
}
