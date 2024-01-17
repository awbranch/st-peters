import React from 'react';
import { IframeBlock as Props } from '@/types/IframeBlock';

export default function IframeBlock({ code }: Props) {
  return <div dangerouslySetInnerHTML={{ __html: code }} />;
}
