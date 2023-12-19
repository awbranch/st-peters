import React from 'react';
import Link from 'next/link';
import { ButtonTileConfig } from '@/types/ButtonTileConfig';
import { urlFor } from '@/sanity/sanity-utils';

export function ButtonTile({ icon, title, text, url }: ButtonTileConfig) {
  return (
    <Link
      className={
        'block bg-white w-11/12 mx-auto sm:mx-0 sm:w-[240px] sm:min-h-[240px] md:w-[270px] md:min-h-[270px] px-2 py-3 rounded ease-in-out duration-200 hover:scale-105'
      }
      href={url}
      title={title}
    >
      <div className={'flex flex-row sm:flex-col gap-2 sm:gap-0'}>
        <img
          alt={icon.alt}
          src={urlFor(icon).url()}
          className={'h-[40px] min-w-[40px] text-sunset sm:mx-auto mb-1'}
        />
        <div className={'text-left sm:text-center'}>
          <h2 className={'text-sunset text-lg leading-tight sm:mb-[15px]'}>
            {title}
          </h2>
          <div className={'text-black'}>{text}</div>
        </div>
      </div>
    </Link>
  );
}
