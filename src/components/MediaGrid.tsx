import React from 'react';
import ResponsiveImage from '@/components/ResponsiveImage';
import Link from 'next/link';
import { Image } from '@/types/Image';
import { breakpoints } from '@/utils/globals';

type MediaGridProps = {
  children: React.ReactNode;
};

export function MediaGrid({ children }: MediaGridProps) {
  return (
    <div className={'text-center'}>
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
        {children}
      </div>
    </div>
  );
}

type MediaGridItemProps = {
  href: string;
  title: string;
  image: Image;
};

export function MediaGridItem({ href, title, image }: MediaGridItemProps) {
  return (
    <Link
      className={'block group shadow-airy p-2 rounded-md'}
      href={href}
      title={title}
    >
      <ResponsiveImage
        image={image}
        priority={false}
        sizes={`(min-width: ${breakpoints.xl}px) 33vw, (min-width: ${breakpoints.lg}px) 50vw, 100vw`}
        className={'w-full h-[300px] ease-in-out duration-200 hover:scale-105'}
      />
      <h2 className="text-base font-bold mt-2 text-center group-hover:text-pink">
        {title}
      </h2>
    </Link>
  );
}
