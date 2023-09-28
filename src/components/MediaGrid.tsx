import React from 'react';
import ResponsiveImage from '@/components/ResponsiveImage';
import Link from 'next/link';
import { Image } from '@/types/Image';

type MediaGridProps = {
  children: React.ReactNode;
};

export function MediaGrid({ children }: MediaGridProps) {
  return (
    <div className={'text-center'}>
      <div className="inline-grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
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
      className={'block w-[360px] group shadow-airy p-2 rounded-md'}
      href={href}
      title={title}
    >
      <ResponsiveImage
        image={image}
        priority={false}
        sizes={'33vw'}
        className={'w-full h-[260px] ease-in-out duration-200 hover:scale-105'}
      />
      <h2 className="text-base font-bold mt-2 text-center group-hover:text-pink">
        {title}
      </h2>
    </Link>
  );
}
