import React from 'react';
import { twMerge } from 'tailwind-merge';

export default function Card({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={twMerge('bg-white rounded p-3', className)} {...props}>
      {children}
    </div>
  );
}
