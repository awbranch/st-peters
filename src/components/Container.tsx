import React from 'react';
import { pageWidths } from '@/utils/globals';
import { DivProps } from 'react-html-props';
import { PageWidth } from '@/types/PageWidth';
import { twMerge } from 'tailwind-merge';

type Props = DivProps & {
  maxWidth?: PageWidth;
  className?: string;
  children: React.ReactNode;
};

export default function Container({
  maxWidth = 'lg',
  className,
  children,
  ...props
}: Props) {
  return (
    <div className={twMerge('px-4 md:px-10', className)} {...props}>
      <div style={{ margin: '0 auto 0 auto', maxWidth: pageWidths[maxWidth] }}>
        {children}
      </div>
    </div>
  );
}
