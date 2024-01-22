import React from 'react';
import { ButtonRow as Props } from '@/types/ButtonRow';
import { LinkButton } from '@/components/Button';
import { twJoin } from 'tailwind-merge';

export default async function ButtonRow({ alignment, buttons }: Props) {
  return (
    <div
      className={twJoin(
        'flex flex-col xs:flex-row gap-4 mt-8 mb-24',
        alignment === 'left' && 'justify-start',
        alignment === 'center' && 'justify-center',
        alignment === 'right' && 'justify-end',
      )}
    >
      {buttons.map((b, i) => (
        <LinkButton
          key={i}
          size={'large'}
          href={b.link}
          icon={b.icon}
          color={b.color.label}
          variant={b.variant}
        >
          {b.label}
        </LinkButton>
      ))}
    </div>
  );
}
