import React from 'react';
import { pageWidths } from '@/utils/globals';
import { DivProps } from 'react-html-props';
import { PageWidth } from '@/types/PageWidth';

type Props = DivProps & {
  children: React.ReactNode;
  maxWidth?: PageWidth;
};

export default function Container({
  children,
  maxWidth = 'lg',
  ...props
}: Props) {
  return (
    <div
      {...props}
      style={{
        margin: '0 auto 0 auto',
        maxWidth: pageWidths[maxWidth],
      }}
    >
      {children}
    </div>
  );
}
