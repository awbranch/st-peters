import React from 'react';
import { NewspaperText as Props } from '@/types/NewspaperText';
import RichText from '@/components/RichText';
import { twJoin } from 'tailwind-merge';

export default async function NewspaperText({ maxColumns, text }: Props) {
  return (
    <div
      className={twJoin(
        'columns-1 gap-x-10',
        maxColumns === 2 && 'md:columns-2',
        maxColumns === 3 && 'md:columns-3',
        maxColumns === 4 && 'md:columns-4',
      )}
    >
      <RichText text={text} />
    </div>
  );
}
