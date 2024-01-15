import React from 'react';
import { PortableTextBlock } from 'sanity';
import { H1 } from '@/components/Typography';
import RichText from '@/components/RichText';

type Props = {
  title?: string;
  text?: PortableTextBlock[];
};

export default function BlockTitle({ title, text }: Props) {
  return (
    <>
      {(title || text) && (
        <div className="mx-auto max-w-4xl text-center mb-12">
          {title && <H1>{title}</H1>}
          {text && <RichText variant={'title'} text={text} />}
        </div>
      )}
    </>
  );
}
