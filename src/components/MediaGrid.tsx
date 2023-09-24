import React from 'react';
import ResponsiveImage from '@/components/ResponsiveImage';
import Link from 'next/link';
import { Image } from '@/types/Image';

type MediaGridProps = {
  children: React.ReactNode;
};

export function MediaGrid({ children }: MediaGridProps) {
  return <div className="grid grid-cols-3 gap-4">{children}</div>;
}

type MediaGridItemProps = {
  href: string;
  title: string;
  image: Image;
};

export function MediaGridItem({ href, title, image }: MediaGridItemProps) {
  return (
    <div className="w-[300px]">
      <Link className={'block'} href={href} title={title}>
        <ResponsiveImage
          image={image}
          priority={false}
          sizes={'33vw'}
          className={'object-cover w-[300px] h-[280px]'}
        />
      </Link>
      <h2 className="text-lg mt-1 text-center">{title}</h2>
    </div>
  );
}
