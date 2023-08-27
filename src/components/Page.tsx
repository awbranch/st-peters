import React from 'react';

interface Props {
  children: React.ReactNode;
}

export default function Page({ children }: Props) {
  return <div className="bg-white rounded">{children}</div>;
}
