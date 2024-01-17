import React from 'react';
import { twJoin } from 'tailwind-merge';
import { CallToActionBlock as Props } from '@/types/CallToActionBlock';
import ResponsiveImage from '@/components/ResponsiveImage';
import { breakpoints } from '@/utils/globals';
import LinkButton from '@/components/LinkButton';
import BlockTitle from '@/components/BlockTitle';

export default function CallToActionBlock({
  alignment,
  title,
  text,
  image,
  button,
}: Props) {
  return (
    <div className="relative">
      <div
        className={twJoin(
          'relative h-80 overflow-hidden md:absolute md:h-full md:w-1/3 lg:w-1/2',
          alignment === 'left' ? 'md:left-0' : 'md:right-0',
        )}
      >
        <ResponsiveImage
          image={image}
          priority={false}
          sizes={`(min-width: ${breakpoints.sm}px) 450px, 100vw`}
          className={'h-full'}
        />
      </div>
      <div className="relative py-24 sm:py-32 lg:py-40">
        <div
          className={twJoin(
            'pl-6 pr-6 md:w-2/3 lg:w-1/2',
            alignment === 'left'
              ? 'md:ml-auto md:pl-16 lg:pl-24 xl:pl-32'
              : 'md:mr-auto md:pr-16 lg:pr-24 xl:pr`-32',
          )}
        >
          <BlockTitle title={title} text={text} alignment={'left'} />

          <div>
            <LinkButton
              size={'large'}
              href={button.link}
              icon={'right'}
              color={button.color.label}
              variant={button.variant}
            >
              {button.label}
            </LinkButton>
          </div>
        </div>
      </div>
    </div>
  );
}
