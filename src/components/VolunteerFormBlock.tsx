import React from 'react';
import Block from '@/components/Block';
import RichText from '@/components/RichText';
import { PortableTextBlock } from 'sanity';
import { Image } from '@/types/Image';

interface Props {
  title: string;
  text: PortableTextBlock[];
  image: Image;
}

export default function VolunteerFormBlock({ title, text, image }: Props) {
  return (
    <Block color={'pink'}>
      <h1 className="text-xl uppercase mb-3">{title}</h1>
      <RichText document={text} />
    </Block>
  );
}
