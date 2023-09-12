import React from 'react';
import Block from '@/components/Block';
import RichText from '@/components/RichText';
import ResponsiveImage from '@/components/ResponsiveImage';
import cn from 'classnames';
import { Color } from '@/types/Color';
import { DonationRequest } from '@/types/DonationRequest';
import Button from '@/components/Button';

interface Props {
  color: Color;
  orientation: 'left' | 'right';
  request: DonationRequest;
}

export default function DonationRequestBlock({
  color,
  orientation,
  request,
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
        <div className="flex-1">
          <h1 className="text-xl sm:text-xl uppercase mb-3">{request.title}</h1>
          <RichText document={request.text} />
          <h2 className={'text-lg mb-3'}>{request.levelsTitle}</h2>
          <div className="mt-3">
            <div className="inline-grid grid-cols-2 gap-3">
              {request.levels.map((l, i) => (
                <div key={i} className="w-[220px] ">
                  <Button className="w-full" color="blue" variant="outline">
                    ${l.amount}
                  </Button>
                  <div className="w-full text-blue uppercase text-center">
                    {l.label}
                  </div>
                </div>
              ))}
              {request.otherLevel && (
                <div>
                  <Button className="w-full" color="blue" variant="outline">
                    Other
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="flex-1">
          <ResponsiveImage image={request.image} sizes={'50vw'} />
        </div>
      </div>
    </Block>
  );
}