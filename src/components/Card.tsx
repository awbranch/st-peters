import React from 'react';
import { DivProps } from 'react-html-props';
import { twMerge } from 'tailwind-merge';

export default function Card({ className, children, ...props }: DivProps) {
  return (
    <div className={twMerge('bg-white rounded p-3', className)} {...props}>
      {children}
    </div>
  );
}
