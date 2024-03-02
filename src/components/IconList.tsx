import React from 'react';
import { IconList as Props } from '@/types/IconList';
import { urlFor } from '@/utils/sanity';
import { splitText } from '@/utils/utils';

export default async function IconList({ items }: Props) {
  return (
    <dl className="mx-auto my-16 grid gap-x-8 grid-cols-1 md:grid-cols-2 gap-y-8 justify-items-center md:justify-items-start max-w-xl">
      {items.map((item) => (
        <div key={item._key} className="relative pl-16">
          <dt>
            <img
              alt={item.icon.alt}
              src={urlFor(item.icon).url()}
              className={'absolute left-0 top-0 h-10 w-10 flex'}
            />
            <span className="text-base font-semibold leading-7">
              {item.title}
            </span>
          </dt>
          <dd className="mt-1 text-base leading-7 text-gray-600">
            {splitText(item.text).map((s, i) => (
              <div key={i}>{s}</div>
            ))}
          </dd>
        </div>
      ))}
    </dl>
  );
}
