import Link from 'next/link';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight, faTypewriter } from '@fortawesome/pro-solid-svg-icons';

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
        <FontAwesomeIcon className={'h-full'} icon={faTypewriter} />
      </span>
      <span
        className={'text-white text-base text-left font-semibold tracking-wide'}
      >
        {label}
      </span>
      <FontAwesomeIcon className={'h-6 w-6 text-white'} icon={faAngleRight} />
    </Link>
  );
}
