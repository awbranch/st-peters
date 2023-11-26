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
      className={
        'block relative ease-in-out duration-200 grayscale hover:grayscale-0 hover:scale-105 '
      }
      href={href}
      title={title}
    >
      <ResponsiveImage
        image={image}
        priority={false}
        sizes={`(min-width: ${breakpoints.xl}px) 33vw, (min-width: ${breakpoints.lg}px) 50vw, 100vw`}
        className={'w-full h-[400px] rounded-md '}
      />
      <div
        className={
          'absolute rounded-md bottom-0 left-0 right-0 top-[300px] bg-gradient-to-t from-near-black to-near-black/0'
        }
      ></div>

      <h2 className="absolute bottom-2 left-0 right-0 text-white text-base font-bold mt-2 text-center">
        {title}
      </h2>
    </Link>
  );
}
