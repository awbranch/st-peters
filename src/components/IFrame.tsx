import React from 'react';
import { IFrame as Props } from '@/types/IFrame';

export default function IFrame({ code }: Props) {
  return (
    <div
      className={'mx-auto flex justify-center'}
      dangerouslySetInnerHTML={{ __html: code }}
    />
  );
}
