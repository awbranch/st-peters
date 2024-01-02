import React from 'react';
import Block from '@/components/Block';
import { ImpactBlock as Props } from '@/types/ImpactBlock';
import { H1, H1Mini, Subtitle } from '@/components/Typography';

export default function ImpactBlock({
  slug,
  background,
  narrow,
  title,
  subtitle,
  text,
  impacts,
}: Props) {
  return (
    <Block slug={slug.current} color={background?.label} center narrow={narrow}>
      <div className="mx-auto max-w-4xl text-center">
        <H1Mini>{title}</H1Mini>
        <H1 as="p">{subtitle}</H1>
        {text.split(/\n+/).map((p, i) => (
          <Subtitle className={'mb-4'} key={i}>
            {p}
          </Subtitle>
        ))}
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
    </Block>
  );
}
