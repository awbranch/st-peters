import React from 'react';
import { ReferenceBlock as Props } from '@/types/ReferenceBlock';
import { getDocument } from '@/sanity/sanity-utils';
import Block from '@/components/Block';

export default async function ReferenceBlock({ block }: Props) {
  const shareableBlock = await getDocument(block._ref);

  if (shareableBlock?.block) {
    return <Block block={shareableBlock?.block[0]} />;
  } else {
    return (
      <div className={'text-5xl text-red-700'}>Unknown Block {block._key}</div>
    );
  }
}
