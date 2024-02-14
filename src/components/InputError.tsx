import React from 'react';
import { twMerge } from 'tailwind-merge';

type Props = {
  className: string;
  message?: string;
};

export default function InputError({ className, message }: Props) {
  return (
    <p
      role={'alert'}
      className={twMerge('text-xs font-bold h-4 opacity-60', className)}
    >
      {message ? message : ''}
    </p>
  );
}
