import React from 'react';
import Block from '@/components/Block';
import RichText from '@/components/RichText';

import { BgColor } from '@/types/Color';
import { Highlight } from '@/types/Highlight';
import ResponsiveImage from '@/components/ResponsiveImage';
import NextLink from 'next/link';

interface Props {
  color: BgColor;
  orientation: 'left' | 'right';
  highlight: Highlight;
}

export default function HighlightBlock({
  color,
  orientation,
  highlight,
}: Props) {
  return (
    <Block bg={color}>
      <div className="flex flex-row gap-4">
        <div className="flex-1 basis-7/12">
          <h1 className="text-xl sm:text-xl uppercase border-black border-b-4 pb-1 mb-3">
            {highlight.title}
          </h1>
          <RichText document={highlight.text} />
          <NextLink href="#" className="text-lg block py-2">
            {highlight.buttonLabel}
          </NextLink>
        </div>
        <div className="flex-1 basis-5/12">
          <ResponsiveImage
            image={highlight.image}
            priority={true}
            sizes={'100vw'}
            className="border-8 border-black rounded-[20px]"
          />
        </div>
      </div>
    </Block>
  );
}
