import React from 'react';
import RichText from '@/components/RichText';
import { TitleText as Props } from '@/types/TitleText';
import { twJoin } from 'tailwind-merge';
import { H1, Para } from '@/components/Typography';

export default function TitleText({ text, alignment, palette }: Props) {
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
        palette={palette}
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
