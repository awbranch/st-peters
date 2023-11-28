import React from 'react';
import type { Color } from '@/types/Color';
import { twMerge } from 'tailwind-merge';
import Container from '@/components/Container';

type Props = {
  color?: Color;
  center?: boolean;
  className?: string;
  children: React.ReactNode;
};

export default function Block({
  color = 'white',
  center = false,
  className = '',
  children,
}: Props) {
  return (
    <div
      className={twMerge(
        'px-2 md:px-4 py-8',
        color === 'green' && 'bg-grass text-white',
        color === 'blue' && 'bg-ocean text-white',
        color === 'pink' && 'bg-sunset text-white',
        color === 'black' && 'bg-black text-white',
        color === 'white' && 'bg-white text-black',
        color === 'gray' && 'bg-gray-100 text-black',
        center && 'text-center',
        className,
      )}
    >
      <Container>{children}</Container>
    </div>
  );
}
