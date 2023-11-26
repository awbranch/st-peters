import React from 'react';
import Block from '@/components/Block';
import { Hero } from '@/types/Hero';
import RichText from '@/components/RichText';
import ResponsiveImage from '@/components/ResponsiveImage';
import { Color } from '@/types/Color';

type Props = {
  color: Color;
  hero: Hero;
  href: string;
};

export default function HeroBlock({ color, hero }: Props) {
  return (
    <Block color={color}>
      <ResponsiveImage image={hero.image} priority={true} sizes={`100vw`} />
      <div
        className={'my-4 max-w-[580px]'}
        style={{
          overflow: 'hidden',
        }}
      >
        <h1 className="text-xl xs:text-2xl mb-4">{hero.title}</h1>
        <RichText text={hero.text} />
      </div>
      <div className={'flex-1'}></div>
    </Block>
  );
}
