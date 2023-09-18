import React from 'react';
import { maxScreenWidth } from '@/utils/globals';

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export default function Container({ children, ...props }: Props) {
  return (
    <div {...props} className="mx-auto" style={{ maxWidth: maxScreenWidth }}>
      {children}
    </div>
  );
}
