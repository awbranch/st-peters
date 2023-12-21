import React from 'react';
import { twJoin } from 'tailwind-merge';
import { HighlightBlock as Props } from '@/types/HighlightBlock';
import Block from '@/components/Block';
import RichText from '@/components/RichText';
import ResponsiveImage from '@/components/ResponsiveImage';
import LinkButton from '@/components/LinkButton';
import { breakpoints } from '@/utils/globals';

export default function HighlightBlock({
  slug,
  background,
  narrow,
  alignment,
  text,
  image,
  buttonLabel,
  buttonLink,
}: Props) {
  return (
    <Block slug={slug.current} color={background?.label} narrow={narrow}>
      <div
        className={twJoin(
          'flex gap-4 flex-col',
          alignment === 'right' && 'lg:flex-row',
          alignment === 'left' && 'lg:flex-row-reverse',
        )}
      >
        <div className="flex-1">
          <RichText text={text} />
          <div className={'hidden lg:block'}>
            <LinkButton
              href={buttonLink}
              variant={'text'}
              size={'large'}
              icon={'right'}
            >
              {buttonLabel}
            </LinkButton>
          </div>
        </div>
        <div className="flex-1 lg:flex-none mx-0 sm:mx-auto lg:mx-0">
          <ResponsiveImage
            image={image}
            priority={false}
            sizes={`(min-width: ${breakpoints.sm}px) 450px, 100vw`}
            className={twJoin('w-full sm:w-[450px] h-[450px] rounded-lg')}
          />
          <div className={'block lg:hidden mt-2 text-center'}>
            <LinkButton
              href={buttonLink}
              variant={'text'}
              size={'large'}
              icon={'right'}
            >
              {buttonLabel}
            </LinkButton>
          </div>
        </div>
      </div>
    </Block>
  );
}
