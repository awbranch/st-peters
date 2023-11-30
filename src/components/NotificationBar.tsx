'use client';
import React, { useState } from 'react';
import { PortableTextBlock } from 'sanity';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/pro-regular-svg-icons';
import NotificationRichText from '@/components/NotificationRichText';
import { twJoin } from 'tailwind-merge';

type Props = {
  message: PortableTextBlock[];
};

export default function NotificationBar({ message }: Props) {
  const [barVisible, setBarVisible] = useState(true);

  return (
    <div
      className={twJoin(
        barVisible ? 'flex' : 'hidden',
        'items-center gap-x-6 bg-black px-6 py-2.5 sm:px-3.5 sm:before:flex-1',
      )}
    >
      <div className="text-sm leading-6 text-white">
        <NotificationRichText message={message}></NotificationRichText>
      </div>
      <div className="flex flex-1 justify-end">
        <button
          type="button"
          className="-m-3 p-3 focus-visible:outline-offset-[-4px]"
          onClick={() => setBarVisible(false)}
        >
          <span className="sr-only">Dismiss</span>
          <FontAwesomeIcon
            className={'h-4 w-4 text-white'}
            icon={faXmark}
            aria-hidden="true"
          />
        </button>
      </div>
    </div>
  );
}
