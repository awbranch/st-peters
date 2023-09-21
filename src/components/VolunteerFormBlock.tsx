import React from 'react';
import Block from '@/components/Block';
import RichText from '@/components/RichText';
import { PortableTextBlock } from 'sanity';
import { Image } from '@/types/Image';
import ResponsiveImage from '@/components/ResponsiveImage';

interface Props {
  title: string;
  text: PortableTextBlock[];
  image: Image;
}

export default function VolunteerFormBlock({ title, text, image }: Props) {
  return (
    <Block color={'pink'}>
      <h1 className="text-xl uppercase mb-3">{title}</h1>
      <RichText text={text} />
      <div className={'flex flex-row gap-4'}>
        <div className={'basis-1/2'}>Form Goes Here</div>
        <div className={'basis-1/2'}>
          <ResponsiveImage image={image} sizes={'50vw'} />
        </div>
      </div>
    </Block>
  );
}
