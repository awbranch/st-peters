import React from 'react';
import Block from '@/components/Block';
import RichText from '@/components/RichText';
import { TextBlock } from '@/types/TextBlock';

export default function TextBlock({
  slug,
  background,
  text,
  narrow,
}: TextBlock) {
  return (
    <Block slug={slug.current} color={background?.label} narrow={narrow}>
      <RichText text={text} />
    </Block>
  );
}
