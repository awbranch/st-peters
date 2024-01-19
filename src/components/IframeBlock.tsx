import React from 'react';
import { IframeBlock as Props } from '@/types/IframeBlock';

export default function IframeBlock({ code }: Props) {
  return (
    <div
      className={'mx-auto flex justify-center'}
      dangerouslySetInnerHTML={{ __html: code }}
    />
  );
}
