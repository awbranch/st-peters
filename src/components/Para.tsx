import React from 'react';
import { twMerge } from 'tailwind-merge';

export default function Para({
  className,
  children,
  ...props
}: React.ParamHTMLAttributes<HTMLParagraphElement>) {
  return (
    <p className={twMerge('text-base mb-1.5', className)} {...props}>
      {children}
    </p>
  );
}
