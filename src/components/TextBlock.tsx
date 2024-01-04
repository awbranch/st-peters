import React from 'react';
import RichText from '@/components/RichText';
import { TextBlock } from '@/types/TextBlock';

export default function TextBlock({ id, text }: TextBlock) {
  return (
    <div id={id?.current}>
      <RichText text={text} />
    </div>
  );
}
