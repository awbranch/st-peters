import React from 'react';
import Block from '@/components/Block';
import { Hero } from '@/types/Hero';
import RichText from '@/components/RichText';
import ResponsiveImage from '@/components/ResponsiveImage';
import { breakpoints } from '@/utils/globals';
import { imageAttributes } from '@/sanity/sanity-utils';
import cn from 'classnames';
import { BgColor } from '@/types/Color';
import Link from 'next/link';

interface Props {
  color: BgColor;
  hero: Hero;
  href: string;
}

export default function HeroBlock({ color, href, hero }: Props) {
  const { width, height } = imageAttributes(hero.image);

  // Layout hero in a flex row when the image is in portrait mode
  const portrait = height > width;

  return (
    <Block bg={color}>
      <div
        className={cn('flex flex-col-reverse gap-4', {
          'lg:flex-row': portrait,
        })}
      >
        <div
          className={portrait ? 'max-w-md lg:flex-1 lg:max-w-full' : 'max-w-md'}
        >
          <h1 className="text-xl sm:text-2xl uppercase mb-4">{hero.title}</h1>
          <RichText document={hero.text} />
          <Link
            href={href}
            className="text-lg hover:underline hover:underline-offset-4"
          >
            {hero.buttonLabel}
          </Link>
        </div>
        <div className={portrait ? 'lg:flex-1' : ''}>
          <ResponsiveImage
            image={hero.image}
            priority={true}
            sizes={
              portrait ? `(max-width: ${breakpoints.lg}) 100vw, 50vw` : '100vw'
            }
          />
        </div>
      </div>
    </Block>
  );
}
