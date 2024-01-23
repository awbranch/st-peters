import React from 'react';
import ResponsiveImage from '@/components/ResponsiveImage';
import Link from 'next/link';
import { Image } from '@/types/Image';
import { Para } from '@/components/Typography';

type MediaCarouselProps = {
  children: React.ReactNode;
};

export function MediaCarousel({ children }: MediaCarouselProps) {
  return <div className="flex flex-row gap-4 mt-4">{children}</div>;
}

type MediaCarouselItemProps = {
  href: string;
  title: string;
  image: Image;
};

export function MediaCarouselItem({
  href,
  title,
  image,
}: MediaCarouselItemProps) {
  return (
    <div className="w-[300px]">
      <Link className={'block'} href={href} title={title}>
        <ResponsiveImage
          image={image}
          priority={false}
          sizes={'33vw'}
          className={'object-cover w-[280px] h-[250px] rounded-xl'}
        />
      </Link>
      <Para className="text-lg mt-3 font-semibold text-center">{title}</Para>
    </div>
  );
}
