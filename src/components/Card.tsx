import React from 'react';
import cn from 'classnames';

export default function Card({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn('bg-white rounded p-3', className)} {...props}>
      {children}
    </div>
  );
}
