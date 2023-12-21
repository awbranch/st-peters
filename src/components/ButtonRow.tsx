import React from 'react';
import { ButtonRow as Props } from '@/types/ButtonRow';
import LinkButton from '@/components/LinkButton';

export default async function ButtonRow({ buttons }: Props) {
  return (
    <div className="flex flex-row gap-2 my-8 justify-center">
      {buttons.map((b, i) => (
        <LinkButton
          key={i}
          href={b.link}
          color={b.color.label}
          size={'small'}
          variant={b.variant === 'primary' ? 'solid' : 'outline'}
        >
          {b.label}
        </LinkButton>
      ))}
    </div>
  );
}
