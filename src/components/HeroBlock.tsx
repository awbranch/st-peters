import React from 'react';
import Block from '@/components/Block';
import { Hero } from '@/types/Hero';
import RichText from '@/components/RichText';
import Img from '@/components/Img';

interface Props {
  hero: Hero;
  priority: boolean;
}

export default function HeroBlock({ hero, priority }: Props) {
  return (
    <Block bg={hero.color}>
      <div className="flex flex-col">
        <div className="flex-1">
          <RichText document={hero.text} />
        </div>
        <div className="flex-1">
          <Img image={hero.image} alt={hero.alt} />
        </div>
      </div>
    </Block>
  );
}
