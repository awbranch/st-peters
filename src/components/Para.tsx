import React from 'react';
import cn from 'classnames';

export default function Para({
  className,
  children,
  ...props
}: React.ParamHTMLAttributes<HTMLParagraphElement>) {
  return (
    <p className={cn('text-base mb-2', className)} {...props}>
      {children}
    </p>
  );
}
