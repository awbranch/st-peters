import React from 'react';
import { ImpactBlock as Props } from '@/types/ImpactBlock';
import { H1 } from '@/components/Typography';
import RichText from '@/components/RichText';

export default function ImpactBlock({ id, title, text, impacts }: Props) {
  return (
    <div id={id?.current}>
      {(title || text) && (
        <div className="mx-auto max-w-4xl text-center mb-12">
          {title && <H1>{title}</H1>}
          {text && <RichText variant={'title'} text={text} />}
        </div>
      )}

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
          {impacts.map((impact, i) => (
            <div key={i} className="mx-auto flex max-w-xs flex-col gap-y-4">
              <dt className="text-base leading-7 text-gray-300">
                {impact.category}
              </dt>
              <dd className="order-first text-4xl font-semibold tracking-wide sm:text-6xl">
                {impact.value.toLocaleString('en-US')}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}
