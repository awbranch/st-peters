import React from 'react';
import { maxScreenWidth } from '@/utils/globals';
import { DivProps } from 'react-html-props';

type Props = DivProps & {
  children: React.ReactNode;
  narrow?: boolean;
};

export default function Container({
  children,
  narrow = false,
  ...props
}: Props) {
  return (
    <div
      {...props}
      style={{
        margin: '0 auto 0 auto',
        maxWidth: narrow ? '930px' : maxScreenWidth,
      }}
    >
      {children}
    </div>
  );
}
