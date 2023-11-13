import React from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { SupportItem } from '@/types/SupportItem';

type Props = {
  item: SupportItem;
};

export function SupportItemCard({ item }: Props) {
  return (
    <Link
      className={
        'block bg-white w-11/12 mx-auto sm:mx-0 sm:w-[240px] sm:min-h-[240px] md:w-[270px] md:min-h-[270px] px-2 py-3 rounded ease-in-out duration-200 hover:scale-105'
      }
      href={item.url}
      title={item.title}
    >
      <div className={'flex flex-row sm:flex-col gap-2 sm:gap-0'}>
        <FontAwesomeIcon
          className={'h-[40px] min-w-[40px] text-pink sm:mx-auto mb-1'}
          icon={item.icon}
        />
        <div className={'text-left sm:text-center'}>
          <h2 className={'text-pink text-lg leading-tight sm:mb-[15px]'}>
            {item.title}
          </h2>
          <div className={'text-black'}>{item.text}</div>
        </div>
      </div>
    </Link>
  );
}
