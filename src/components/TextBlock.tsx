import React from 'react';
import RichText from '@/components/RichText';
import { TextBlock } from '@/types/TextBlock';
import { twJoin } from 'tailwind-merge';

export default function TextBlock({ text, alignment }: TextBlock) {
  return (
    <div
      className={twJoin(
        alignment === 'left' && 'text-left',
        alignment === 'center' && 'mx-auto max-w-4xl text-center',
        alignment === 'right' && 'text-right',
      )}
    >
      <RichText text={text} />
    </div>
  );
}
