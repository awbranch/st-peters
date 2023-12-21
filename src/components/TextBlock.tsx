import React from 'react';
import Block from '@/components/Block';
import RichText from '@/components/RichText';
import { TextBlock } from '@/types/TextBlock';

export default function TextBlock({ slug, background, text }: TextBlock) {
  return (
    <Block slug={slug.current} color={background.label}>
      <RichText text={text} />
    </Block>
  );
}
