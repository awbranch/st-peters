import React from 'react';
import { twJoin } from 'tailwind-merge';
import { Color } from '@/types/Color';
import { Highlight } from '@/types/Highlight';
import Block from '@/components/Block';
import RichText from '@/components/RichText';
import ResponsiveImage from '@/components/ResponsiveImage';
import LinkButton from '@/components/LinkButton';
import { breakpoints } from '@/utils/globals';

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
        className={twJoin(
          'flex gap-4 flex-col',
          orientation === 'right' && 'lg:flex-row',
          orientation === 'left' && 'lg:flex-row-reverse',
        )}
      >
        <div className="flex-1">
          <h1
            className={twJoin(
              'text-xl sm:text-xl border-b-4 pb-1 mb-3',
              color === 'white' ? 'border-black' : 'border-white',
            )}
          >
            {highlight.title}
          </h1>
          <RichText text={highlight.text} />
          <div className={'hidden lg:block'}>
            <LinkButton
              href={highlight.buttonLink}
              variant={'text'}
              size={'large'}
              icon={'right'}
            >
              {highlight.buttonLabel}
            </LinkButton>
          </div>
        </div>
        <div className="flex-1 lg:flex-none mx-0 sm:mx-auto lg:mx-0">
          <ResponsiveImage
            image={highlight.image}
            priority={false}
            sizes={`(min-width: ${breakpoints.sm}px) 450px, 100vw`}
            className={twJoin('w-full sm:w-[450px] h-[450px] rounded-lg')}
          />
          <div className={'block lg:hidden mt-2 text-center'}>
            <LinkButton
              href={highlight.buttonLink}
              variant={'text'}
              size={'large'}
              icon={'right'}
            >
              {highlight.buttonLabel}
            </LinkButton>
          </div>
        </div>
      </div>
    </Block>
  );
}
