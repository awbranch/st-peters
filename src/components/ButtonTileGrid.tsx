import React from 'react';
import { ButtonTileGrid as Props } from '@/types/ButtonTileGrid';
import Link from 'next/link';
import { urlFor } from '@/utils/sanity';
import { twJoin } from 'tailwind-merge';

export default async function ButtonTileGrid({ buttons, palette }: Props) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 auto-rows-fr">
      {buttons.map((button, i) => (
        <Link
          key={i}
          className={twJoin(
            'block p-6  sm:p-8 rounded-xl ease-in-out duration-200 hover:scale-105',
            palette === 'white' && 'bg-gray-100 text-black',
            palette === 'highlight' && 'bg-white text-sunset',
            palette === 'gray' && 'bg-white text-black',
            palette === 'black' && 'bg-white  text-black',
          )}
          href={button.url}
        >
          <div className={'flex flex-row sm:flex-col gap-6 sm:gap-2'}>
            <img
              alt={button.icon.alt}
              src={urlFor(button.icon).url()}
              className={'h-10 w-10 sm:mx-auto mb-1'}
            />
            <div className={'text-left sm:text-center'}>
              <h2 className={'text-xl tracking-tight font-medium mb-2'}>
                {button.title}
              </h2>
              <div className={'text-base'}>{button.text}</div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
