import React from 'react';
import { ListSet as Props } from '@/types/ListSet';
import { twJoin } from 'tailwind-merge';
import { splitText } from '@/utils/utils';

export default function ListSet({ lists }: Props) {
  return (
    <div className={'columns-1 gap-x-10 md:columns-2 space-y-10'}>
      {lists.map((listSet) => (
        <div
          key={listSet._key}
          className={twJoin(
            splitText(listSet.list).length < 10 && 'break-inside-avoid-column',
          )}
        >
          {listSet.name && (
            <p className={'text-base leading-relaxed font-semibold mb-4'}>
              {listSet.name}
            </p>
          )}
          <ul className={'list-disc ml-6'}>
            {splitText(listSet.list).map((t, i) => (
              <li className={'mb-0.5'} key={i}>
                {t}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
