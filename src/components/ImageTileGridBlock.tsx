import React from 'react';
import { ImageTileGridBlock as Props } from '@/types/ImageTileGridBlock';
import ResponsiveImage from '@/components/ResponsiveImage';

export default async function ImageTileGridBlock({ images }: Props) {
  return (
    <div className="mx-auto grid max-w-2xl auto-rows-fr grid-cols-1 gap-10 lg:mx-0 lg:max-w-none lg:grid-cols-3">
      {images.map((tile) => (
        <article
          key={tile._key}
          className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 px-8 pb-8 pt-80 sm:pt-48 lg:pt-80  group"
        >
          <ResponsiveImage
            image={tile.image}
            priority={false}
            sizes={`100vw`}
            className="absolute inset-0 -z-10 h-full w-full object-cover"
          />

          <div className="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/20 group-hover:opacity-80" />
          <div className="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-900/10" />

          <h3 className="mt-3 text-lg font-semibold leading-6 text-white">
            <a href={tile.url}>
              <span className="absolute inset-0" />
              {tile.label}
            </a>
          </h3>
        </article>
      ))}
    </div>
  );
}
