import React from 'react';
import Block from '@/components/Block';
import RichText from '@/components/RichText';
import ResponsiveImage from '@/components/ResponsiveImage';
import { twJoin } from 'tailwind-merge';
import { Color } from '@/types/Color';
import { DonationRequest } from '@/types/DonationRequest';
import LinkButton from '@/components/LinkButton';

type Props = {
  color: Color;
  orientation: 'left' | 'right';
  request: DonationRequest;
};

export default function DonationRequestBlock({
  color,
  orientation,
  request,
}: Props) {
  return (
    <Block color={color}>
      <div
        className={twJoin(
          'flex gap-4',
          orientation === 'right' && 'flex-row',
          orientation === 'left' && 'flex-row-reverse',
        )}
      >
        <div className="flex-1">
          <h1 className="text-xl sm:text-xl uppercase mb-3">{request.title}</h1>
          <RichText text={request.text} />

          <div className="block lg:hidden">
            <ResponsiveImage
              image={request.image}
              sizes={'100vw'}
              className={
                'my-4 h-[450px] w-full mx-0 md:w-[450px] md:mx-auto lg:w-full lg:mx-0'
              }
            />
          </div>
          <h2 className={'text-lg mb-3 text-center lg:text-left'}>
            {request.levelsTitle}
          </h2>
          <div className="mt-3 mx-auto lg:mx-0 max-w-fit">
            <div className="inline-grid grid-cols-1 xs:grid-cols-2 gap-3">
              {request.levels.map((l, i) => (
                <div key={i} className="w-[200px]">
                  <LinkButton
                    className="w-full"
                    color="blue"
                    variant="outline"
                    href={'#'}
                  >
                    ${l.amount}
                  </LinkButton>
                  <div className="w-full text-blue uppercase text-center">
                    {l.label}
                  </div>
                </div>
              ))}
              {request.otherLevel && (
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
          <ResponsiveImage
            image={request.image}
            sizes={'50vw'}
            className={'h-[700px]'}
          />
        </div>
      </div>
    </Block>
  );
}
