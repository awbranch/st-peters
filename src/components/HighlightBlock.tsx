import React from 'react';
import cn from 'classnames';
import { Color } from '@/types/Color';
import { Highlight } from '@/types/Highlight';
import Block from '@/components/Block';
import RichText from '@/components/RichText';
import ResponsiveImage from '@/components/ResponsiveImage';
import LinkButton from '@/components/LinkButton';

type Props = {
  color: Color;
  orientation: 'left' | 'right';
  highlight: Highlight;
};

export default function HighlightBlock({
  color,
  orientation,
  highlight,
}: Props) {
  return (
    <Block color={color}>
      <div
        className={cn(
          'flex gap-4',
          {
            'flex-row': orientation === 'right',
          },
          {
            'flex-row-reverse': orientation === 'left',
          },
        )}
      >
        <div className="flex-1 basis-7/12">
          <h1
            className={cn(
              'text-xl sm:text-xl uppercase border-black border-b-4 pb-1 mb-3',
              color === 'white' ? 'border-black' : 'border-white',
            )}
          >
            {highlight.title}
          </h1>
          <RichText text={highlight.text} />
          <LinkButton
            href={highlight.buttonLink}
            variant={'text'}
            size={'large'}
            icon={'right'}
          >
            {highlight.buttonLabel}
          </LinkButton>
        </div>
        <div className="flex-1 basis-5/12">
          <ResponsiveImage
            image={highlight.image}
            priority={true}
            sizes={'100vw'}
            className={cn(
              'border-8 rounded-lg',
              color === 'white' ? 'border-black' : 'border-white',
            )}
          />
        </div>
      </div>
    </Block>
  );
}
