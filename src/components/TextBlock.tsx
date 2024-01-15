import React from 'react';
import RichText from '@/components/RichText';
import { TextBlock } from '@/types/TextBlock';

export default function TextBlock({ text }: TextBlock) {
  return (
    <div>
      <RichText text={text} />
    </div>
  );
}
