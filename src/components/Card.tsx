import React from 'react';
import classNames from 'classnames';

export default function Card({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={classNames('bg-white rounded p-3', className)} {...props}>
      {children}
    </div>
  );
}
