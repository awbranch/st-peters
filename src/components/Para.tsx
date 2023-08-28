import React from 'react';
import classNames from 'classnames';

export default function Para({
  className,
  children,
  ...props
}: React.ParamHTMLAttributes<HTMLParagraphElement>) {
  return (
    <p className={classNames('text-base mb-2', className)} {...props}>
      {children}
    </p>
  );
}
