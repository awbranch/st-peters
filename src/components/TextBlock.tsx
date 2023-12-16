import React from 'react';
import Block from '@/components/Block';
import RichText from '@/components/RichText';
import { TextBlockConfig } from '@/types/TextBlockConfig';

export default function TextBlock({ slug, background, text }: TextBlockConfig) {
  return (
    <Block slug={slug.current} color={background.label}>
      <RichText text={text} />
    </Block>
  );
}
