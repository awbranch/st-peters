import React from 'react';
import ResponsiveImage from '@/components/ResponsiveImage';
import Link from 'next/link';
import { Image } from '@/types/Image';
import { breakpoints } from '@/utils/globals';

type ProgramCardProps = {
  href: string;
  title: string;
  image: Image;
};

export function ProgramCard({ href, title, image }: ProgramCardProps) {
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
      <h2 className="text-base font-bold mt-2 text-center group-hover:text-sunset">
        {title}
      </h2>
    </Link>
  );
}
