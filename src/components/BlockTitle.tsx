import React from 'react';
import { PortableTextBlock } from 'sanity';
import RichText from '@/components/RichText';
import { twJoin } from 'tailwind-merge';
import { H1 } from '@/components/Typography';

type Props = {
  title?: string;
  text?: PortableTextBlock[];
  alignment?: 'left' | 'center';
};

export default function BlockTitle({
  title,
  text,
  alignment = 'center',
}: Props) {
  return (
    <>
      {(title || text) && (
        <div
          className={twJoin(
            'mb-12',
            alignment === 'center' && 'mx-auto max-w-4xl text-center ',
          )}
        >
          {title && <H1 className={'mt-0'}>{title}</H1>}
          {text && <RichText variant={'title'} text={text} />}
        </div>
      )}
    </>
  );
}
