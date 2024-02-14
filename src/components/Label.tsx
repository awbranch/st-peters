import React, { LabelHTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';

type LabelProps = LabelHTMLAttributes<HTMLLabelElement>;

export default function Label({ className, children, ...props }: LabelProps) {
  return (
    <label
      className={twMerge('text-sm font-semibold leading-6', className)}
      {...props}
    >
      {children}
    </label>
  );
}
