import React from 'react';
import { twJoin } from 'tailwind-merge';
import { CallToAction as Props } from '@/types/CallToAction';
import ResponsiveImage from '@/components/ResponsiveImage';
import { breakpoints, userPaletteButtonProps } from '@/utils/globals';
import { LinkButton } from '@/components/Button';
import RichText from '@/components/RichText';
import { Subtitle } from '@/components/Typography';

export default function CallToAction({
  alignment,
  text,
  image,
  button,
  palette,
}: Props) {
  return (
    <div className="relative">
      <div
        className={twJoin(
          'relative h-80 overflow-hidden md:absolute md:h-full md:w-1/2',
          alignment === 'left' ? 'md:left-0' : 'md:right-0',
        )}
      >
        <ResponsiveImage
          image={image}
          priority={false}
          sizes={`(min-width: ${breakpoints.sm}px) 450px, 100vw`}
          className={'h-full rounded-2xl'}
        />
      </div>
      <div className="relative py-12 md:py-24 lg:py-32">
        <div
          className={twJoin(
            'pl-6 pr-6 md:w-1/2',
            alignment === 'left'
              ? 'md:ml-auto md:pl-12 lg:pl-16 xl:pl-24'
              : 'md:mr-auto md:pr-12 lg:pr-16 xl:pr-24',
          )}
        >
          <RichText
            text={text}
            palette={palette}
            overrides={{
              block: {
                normal: ({ children }: { children: React.ReactNode }) => (
                  <Subtitle>{children}</Subtitle>
                ),
              },
            }}
          />

          <div className={'mt-10'}>
            <LinkButton
              size={'large'}
              href={button.link}
              icon={button.icon}
              {...userPaletteButtonProps[palette][button.style]}
            >
              {button.label}
            </LinkButton>
          </div>
        </div>
      </div>
    </div>
  );
}
