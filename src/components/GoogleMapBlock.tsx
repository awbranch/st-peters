import React from 'react';
import Block from '@/components/Block';
import RichText from '@/components/RichText';
import { PortableTextBlock } from 'sanity';
interface Props {
  title: string;
  text: PortableTextBlock[];
  embedURL: string;
}

export default function GoogleMapBlock({ title, text, embedURL }: Props) {
  return (
    <Block color="pink">
      <h1 className="text-xl mb-3">{title}</h1>
      <RichText document={text} />
      <iframe
        className="mt-3"
        id="google-map"
        src={embedURL}
        width="100%"
        height="680"
        allowFullScreen={false}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </Block>
  );
}
