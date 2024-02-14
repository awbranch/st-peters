import React, { HTMLAttributes } from 'react';

import { twMerge } from 'tailwind-merge';

export default function Card({
  className,
  children,
  ...props
}: HTMLAttributes<HTMLElement>) {
  return (
    <div className={twMerge('bg-white rounded p-3', className)} {...props}>
      {children}
    </div>
  );
}
