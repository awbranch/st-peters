import React from 'react';
import RichText from '@/components/RichText';
import ResponsiveImage from '@/components/ResponsiveImage';
import { twJoin } from 'tailwind-merge';
import LinkButton from '@/components/LinkButton';
import { breakpoints } from '@/utils/globals';
import { DonationRequestBlock as Props } from '@/types/DonationRequestBlock';

export default async function DonationRequestBlock({
  alignment,
  title,
  text,
  image,
  levelsTitle,
  levels,
  otherLevel,
}: Props) {
  return (
    <div
      className={twJoin(
        'flex gap-4',
        alignment === 'right' && 'flex-row',
        alignment === 'left' && 'flex-row-reverse',
      )}
    >
      <div className="flex-1">
        <h1 className="text-xl sm:text-xl mb-3">{title}</h1>
        <RichText text={text} />

        <div className="block lg:hidden">
          <ResponsiveImage
            image={image}
            sizes={`(max-width: ${breakpoints.lg}px) 100vw, ${breakpoints.lg}px`}
            className={'my-4 mx-0 w-full'}
          />
        </div>
        <h2 className={'text-lg mb-3 text-center lg:text-left'}>
          {levelsTitle}
        </h2>
        <div className="mt-3 mx-auto lg:mx-0 max-w-fit">
          <div className="inline-grid grid-cols-1 xs:grid-cols-2 gap-3">
            {levels.map((l, i) => (
              <div key={i} className="w-[200px]">
                <LinkButton
                  className="w-full"
                  color="blue"
                  variant="outline"
                  href={'#'}
                >
                  ${l.amount}
                </LinkButton>
                <div className="w-full text-ocean text-center">{l.label}</div>
              </div>
            ))}
            {otherLevel && (
              <div>
                <LinkButton
                  className="w-[200px]"
                  color="blue"
                  variant="outline"
                  href={'#'}
                >
                  Other
                </LinkButton>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="flex-1 hidden lg:block">
        <ResponsiveImage image={image} sizes={'50vw'} className={'h-[700px]'} />
      </div>
    </div>
  );
}
