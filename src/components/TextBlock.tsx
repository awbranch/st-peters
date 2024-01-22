import React from 'react';
import RichText from '@/components/RichText';
import { TextBlock } from '@/types/TextBlock';
import { twJoin } from 'tailwind-merge';
import { H1, Para } from '@/components/Typography';

export default function TextBlock({ text, alignment }: TextBlock) {
  return (
    <div
      className={twJoin(
        alignment === 'left' && 'text-left',
        alignment === 'center' && 'mx-auto max-w-2xl text-center',
        alignment === 'right' && 'text-right',
      )}
    >
      <RichText
        text={text}
        overrides={{
          block: {
            h1: ({ children }: { children: React.ReactNode }) => (
              <H1 className={'mt-0 mb-4'}>{children}</H1>
            ),
            normal: ({ children }: { children: React.ReactNode }) => (
              <Para className={'mb-4'}>{children}</Para>
            ),
          },
        }}
      />
    </div>
  );
}
