import React from 'react';
import { ButtonRow as Props } from '@/types/ButtonRow';
import { LinkButton } from '@/components/Button';
import { twJoin } from 'tailwind-merge';

import { userPaletteButtonProps } from '@/utils/globals';

export default async function ButtonRow({
  alignment,
  buttons,
  palette,
}: Props) {
  return (
    <div
      className={twJoin(
        'flex flex-col xs:flex-row gap-8',
        alignment === 'left' && 'justify-start',
        alignment === 'center' && 'justify-center',
        alignment === 'right' && 'justify-end',
      )}
    >
      {buttons.map((b) => (
        <LinkButton
          key={b._key}
          size={'large'}
          href={b.link}
          icon={b.icon}
          {...userPaletteButtonProps[palette][b.style]}
        >
          {b.label}
        </LinkButton>
      ))}
    </div>
  );
}
