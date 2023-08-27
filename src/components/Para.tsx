import React from 'react';

interface Props {
  className?: string;
  children: React.ReactNode;
}

export default function Para({ className = '', children }: Props) {
  return <p className={`text-base mb-2 ${className}`}>{children}</p>;
}
