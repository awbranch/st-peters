import Link from 'next/link';
import React from 'react';
import { TypewriterIcon, AngleRightIcon } from '@/components/Icon';

type Props = {
  href: string;
  label: string;
};

export default function NewsletterButton({ href, label }: Props) {
  return (
    <Link
      className={
        'inline-flex gap-x-5 py-2 pl-2 pr-6 bg-black items-center rounded-full group hover:bg-gray-700'
      }
      href={href}
    >
      <span
        className={
          'flex items-center bg-white text-black rounded-full h-12 aspect-square justify-center p-2 group-hover:text-gray-700'
        }
      >
        <TypewriterIcon className={'h-full fill-current'} />
      </span>
      <span
        className={'text-white text-base text-left font-semibold tracking-wide'}
      >
        {label}
      </span>
      <AngleRightIcon className={'h-6 w-6 fill-white'} />
    </Link>
  );
}
