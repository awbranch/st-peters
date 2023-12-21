import React from 'react';
import { maxScreenWidth } from '@/utils/globals';

type Props = React.HTMLAttributes<HTMLDivElement> & {
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
