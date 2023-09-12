import React from 'react';
import Block from '@/components/Block';
import { History } from '@/types/History';
import ResponsiveImage from '@/components/ResponsiveImage';
import RichText from '@/components/RichText';
interface Props {
  history: History;
}

export default function HistoryBlock({ history }: Props) {
  return (
    <Block color={'white'}>
      <h1 className="text-xl">{history.title}</h1>
      <ResponsiveImage
        className="my-4 w-full"
        image={history.image}
        priority={true}
        sizes={'100vw'}
      />
      <RichText document={history.text} />
    </Block>
  );
}
