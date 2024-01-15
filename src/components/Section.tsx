import React from 'react';
import { twMerge } from 'tailwind-merge';
import Container from '@/components/Container';
import { Color } from '@/types/Color';
import { PageWidth } from '@/types/PageWidth';

type Props = {
  id?: string;
  color?: Color;
  maxWidth?: PageWidth;
  className?: string;
  children: React.ReactNode;
};

export default function Section({
  id,
  color = 'white',
  maxWidth = 'lg',
  className,
  children,
}: Props) {
  return (
    <section
      id={id}
      className={twMerge(
        'px-4 md:px-10 py-20 md:py-24',
        color === 'green' && 'bg-grass text-white',
        color === 'blue' && 'bg-ocean text-white',
        color === 'pink' && 'bg-sunset text-white',
        color === 'black' && 'bg-black text-white',
        color === 'white' && 'bg-white text-black',
        color === 'gray' && 'bg-gray-100 text-black',
        className,
      )}
    >
      <Container maxWidth={maxWidth}>{children}</Container>
    </section>
  );
}
