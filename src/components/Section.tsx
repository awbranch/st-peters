import React from 'react';
import { twMerge } from 'tailwind-merge';
import Container from '@/components/Container';
import { PageWidth } from '@/types/PageWidth';
import { Palette } from '@/types/Palette';

import { userPaletteClasses } from '@/utils/globals';

type Props = {
  id?: string;
  palette?: Palette;
  maxWidth?: PageWidth;
  className?: string;
  children: React.ReactNode;
};

export default function Section({
  id,
  palette = 'white',
  maxWidth = 'lg',
  className,
  children,
}: Props) {
  return (
    <section
      id={id}
      className={twMerge(
        'py-20 md:py-24',
        userPaletteClasses[palette].block,
        className,
      )}
    >
      <Container maxWidth={maxWidth}>{children}</Container>
    </section>
  );
}
