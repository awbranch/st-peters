import React from 'react';

type Props = React.HTMLAttributes<HTMLDivElement> & {
  children: React.ReactNode;
};

export default function NarrowContainer({ children, ...props }: Props) {
  return (
    <div
      {...props}
      style={{
        margin: '0 auto 0 auto',
        maxWidth: '930px',
      }}
    >
      {children}
    </div>
  );
}
