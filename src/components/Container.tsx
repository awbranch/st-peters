import React from 'react';
import { maxScreenWidth } from '@/utils/globals';

type Props = React.HTMLAttributes<HTMLDivElement> & {
  children: React.ReactNode;
};

export default function Container({ children, ...props }: Props) {
  return (
    <div
      {...props}
      style={{
        margin: '0 auto 0 auto',
        maxWidth: maxScreenWidth,
      }}
    >
      {children}
    </div>
  );
}
