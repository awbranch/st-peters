import React from 'react';
import {
  ArrowLongLeftIcon,
  ArrowLongRightIcon,
} from '@heroicons/react/20/solid';

import Link from 'next/link';
import { twJoin } from 'tailwind-merge';

type Props = {
  pages: string[];
  current: number;
};

export default function Pager({ pages, current }: Props) {
  if (pages.length < 2) {
    return <></>;
  }

  const numberedPages = pages.map((p, i) => ({
    number: i + 1,
    href: p,
  }));

  return (
    <nav className="flex items-center justify-between border-t border-gray-200 px-4 sm:px-0">
      <div className="-mt-px flex w-0 flex-1">
        <ArrowButton
          style={'first'}
          href={pages[Math.max(current - 1, 0)]}
          enabled={current > 0}
        />
      </div>
      <div className="hidden md:-mt-px md:flex">
        {pages.length > 2 &&
          slidingWindow(
            numberedPages,
            current,
            pages.length <= 3 ? 3 : pages.length <= 4 ? 4 : 5,
          ).map((p, i) => (
            <NumberButton
              key={i}
              number={p.number}
              active={p.number - 1 === current}
              href={p.href}
            />
          ))}
      </div>
      <div className="-mt-px flex w-0 flex-1 justify-end">
        <ArrowButton
          style={'last'}
          href={pages[Math.min(current + 1, pages.length - 1)]}
          enabled={current < pages.length - 1}
        />
      </div>
    </nav>
  );
}

type ArrowButtonProps = {
  style: 'first' | 'last';
  href: string;
  enabled: boolean;
};

function ArrowButton({ style, href, enabled }: ArrowButtonProps) {
  return (
    <Link
      href={enabled ? href : '#'}
      className={twJoin(
        'inline-flex items-center border-t-2 border-transparent pr-1 pt-4 text-sm font-medium',
        enabled
          ? 'text-gray-500 hover:border-gray-300 hover:text-gray-700'
          : 'text-gray-300 cursor-default',
      )}
    >
      {style === 'first' ? (
        <>
          <ArrowLongLeftIcon
            className={twJoin(
              'h-5 w-5 mr-3',
              enabled ? 'text-gray-500' : 'text-gray-300',
            )}
            aria-hidden="true"
          />
          Previous
        </>
      ) : (
        <>
          Next
          <ArrowLongRightIcon
            className={twJoin(
              'h-5 w-5 ml-3',
              enabled ? 'text-gray-500' : 'text-gray-300',
            )}
            aria-hidden="true"
          />
        </>
      )}
    </Link>
  );
}

type NumberButtonProps = {
  number: number;
  active: boolean;
  href: string;
};

function NumberButton({ number, active, href }: NumberButtonProps) {
  return (
    <Link
      href={href}
      className={twJoin(
        active
          ? 'inline-flex items-center border-t-2 border-sunset px-4 pt-4 text-sm font-medium text-sunset'
          : 'inline-flex items-center border-t-2 border-transparent px-4 pt-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700',
      )}
      {...(active ? { 'aria-current': 'page' } : {})}
    >
      {number}
    </Link>
  );
}

function Ellipses() {
  return (
    <span className="inline-flex items-center border-t-2 border-transparent px-4 pt-4 text-sm font-medium text-gray-500">
      ...
    </span>
  );
}

function slidingWindow(
  array: any[],
  index: number,
  windowSize: number,
): any[] | null {
  if (index < 0 || index >= array.length || windowSize <= 0) {
    return null;
  }

  let startIndex = Math.max(0, index - Math.floor(windowSize / 2));
  let endIndex = Math.min(array.length - 1, startIndex + windowSize - 1);

  if (endIndex - startIndex + 1 < windowSize) {
    startIndex = Math.max(0, endIndex - windowSize + 1);
  } else if (endIndex - startIndex + 1 > windowSize) {
    endIndex = Math.min(array.length - 1, startIndex + windowSize - 1);
  }

  return array.slice(startIndex, endIndex + 1); // +1 to include endIndex in the slice
}
