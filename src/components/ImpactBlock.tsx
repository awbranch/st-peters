import React from 'react';
import { ImpactBlock as Props } from '@/types/ImpactBlock';
import { H1, H1Mini, Subtitle } from '@/components/Typography';
import TextSplit from '@/components/TextSplit';

export default function ImpactBlock({
  id,
  title,
  subtitle,
  text,
  impacts,
}: Props) {
  return (
    <div id={id?.current}>
      <div className="mx-auto max-w-4xl text-center">
        <H1Mini>{title}</H1Mini>
        <H1 as="p">{subtitle}</H1>
        <TextSplit
          className={'space-y-10'}
          text={text}
          render={(p) => <Subtitle>{p}</Subtitle>}
        />
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8 mt-12">
        <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
          {impacts.map((impact, i) => (
            <div key={i} className="mx-auto flex max-w-xs flex-col gap-y-4">
              <dt className="text-base leading-7 text-gray-300">
                {impact.category}
              </dt>
              <dd className="order-first text-3xl font-semibold tracking-wide sm:text-5xl">
                {impact.value.toLocaleString('en-US')}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}
