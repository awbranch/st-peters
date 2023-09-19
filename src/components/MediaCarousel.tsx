import React from 'react';
import ResponsiveImage from '@/components/ResponsiveImage';
import Link from 'next/link';
import { Image } from '@/types/Image';

interface MediaCarouselProps {
  children: React.ReactNode;
}

export function MediaCarousel({ children }: MediaCarouselProps) {
  return <div className="flex flex-row gap-4 mt-4">{children}</div>;
}

interface MediaCarouselItemProps {
  href: string;
  title: string;
  image: Image;
}

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
          className={'object-cover w-[300px] h-[280px]'}
        />
      </Link>
      <h2 className="text-lg mt-1 text-center">{title}</h2>
    </div>
  );
}
