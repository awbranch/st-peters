import React from 'react';
import Block from '@/components/Block';
import ResponsiveImage from '@/components/ResponsiveImage';
import RichText from '@/components/RichText';
import { Image } from '@/types/Image';
import { PortableTextBlock } from 'sanity';

interface Props {
  title: string;
  image: Image;
  text: PortableTextBlock[];
}

export default function HistoryBlock({ title, image, text }: Props) {
  return (
    <Block color={'white'}>
      <h1 className="text-xl">{title}</h1>
      <ResponsiveImage
        className="my-4 w-full"
        image={image}
        priority={true}
        sizes={'100vw'}
      />
      <RichText document={text} />
    </Block>
  );
}
