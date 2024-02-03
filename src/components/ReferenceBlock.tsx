import React from 'react';
import { ReferenceBlock as Props } from '@/types/ReferenceBlock';
import { getShareableBlockSet } from '@/utils/sanity-utils';
import BlockList from '@/components/BlockList';

export default async function ReferenceBlock({ blockSet }: Props) {
  const shareableBlockSet = blockSet?._ref
    ? await getShareableBlockSet(blockSet?._ref)
    : null;

  if (!shareableBlockSet) {
    return (
      <div className={'text-5xl text-red-700'}>
        Unknown Block Set {blockSet._key}
      </div>
    );
  } else if (!shareableBlockSet.blocks?.length) {
    return (
      <div className={'text-5xl text-red-700'}>
        Block Set {shareableBlockSet.name} contains no blocks
      </div>
    );
  } else {
    return <BlockList blocks={shareableBlockSet.blocks} />;
  }
}
