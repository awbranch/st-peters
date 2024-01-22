import React from 'react';
import { twJoin } from 'tailwind-merge';
import { CallToActionBlock as Props } from '@/types/CallToActionBlock';
import ResponsiveImage from '@/components/ResponsiveImage';
import { breakpoints } from '@/utils/globals';
import { LinkButton } from '@/components/Button';
import RichText from '@/components/RichText';
import { Subtitle } from '@/components/Typography';

export default function CallToActionBlock({
  alignment,
  text,
  image,
  button,
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
      <div className="relative py-24 sm:py-32 lg:py-40">
        <div
          className={twJoin(
            'pl-6 pr-6 md:w-1/2',
            alignment === 'left'
              ? 'md:ml-auto md:pl-16 lg:pl-24 xl:pl-32'
              : 'md:mr-auto md:pr-16 lg:pr-24 xl:pr`-32',
          )}
        >
          <RichText
            text={text}
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
