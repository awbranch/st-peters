import React from 'react';
import { ImpactList as Props } from '@/types/ImpactList';

export default function ImpactList({ impacts }: Props) {
  return (
    <div className="px-6 lg:px-8">
      <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
        {impacts.map((impact) => (
          <div
            key={impact._key}
            className="mx-auto flex max-w-xs flex-col gap-y-4"
          >
            <dt className="text-base leading-4">{impact.category}</dt>
            <dd className="order-first text-5xl xs:text-6xl xl:text-7xl font-semibold tracking-wide">
              {impact.value.toLocaleString('en-US')}
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
