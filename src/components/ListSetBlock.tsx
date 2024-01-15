import React from 'react';
import { ListSetBlock as Props } from '@/types/ListSetBlock';
import { H1 } from '@/components/Typography';
import { splitText } from '@/utils/text';
import { twJoin } from 'tailwind-merge';

export default function ListSetBlock({ title, lists }: Props) {
  return (
    <div>
      {title && <H1 className={'mb-10'}>{title}</H1>}
      <div className={'columns-1 gap-x-10 md:columns-2 space-y-10'}>
        {lists.map((listSet, i) => (
          <div
            key={i}
            className={twJoin(
              splitText(listSet.list).length < 10 &&
                'break-inside-avoid-column',
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
    </div>
  );
}
