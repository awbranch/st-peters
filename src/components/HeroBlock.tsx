import React from 'react';
import Block from '@/components/Block';
import { Hero } from '@/types/Hero';
import RichText from '@/components/RichText';
import ResponsiveImage from '@/components/ResponsiveImage';
import { twJoin } from 'tailwind-merge';
import { Color } from '@/types/Color';
import LinkButton from '@/components/LinkButton';
import { breakpoints } from '@/utils/globals';

type Props = {
  color: Color;
  hero: Hero;
  href: string;
};

export default function HeroBlock({ color, href, hero }: Props) {
  return (
    <Block color={color}>
      <div
        className={twJoin('flex flex-col-reverse lg:flex-row gap-4 lg:gap-8')}
      >
        <div className={'flex-1 max-w-full sm:max-w-md lg:max-w-full'}>
          <h1 className="text-2xl xs:3xl mb-4">{hero.title}</h1>
          <RichText text={hero.text} />
          <LinkButton href={href} variant={'text'} size={'large'} icon={'down'}>
            {hero.buttonLabel}
          </LinkButton>
        </div>
        <div className={'flex-1'}>
          <ResponsiveImage
            image={hero.image}
            priority={true}
            sizes={`(min-width: ${breakpoints.lg}px) 50vw, 100vw`}
            className={'h-[600px]'}
          />
        </div>
      </div>
    </Block>
  );
}
