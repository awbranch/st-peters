import React from 'react';
import { Para } from '@/components/Typography';

type Props = {
  text: string;
};

/**
 * Breaks a string delimited by newlines into a set of paragraphs
 */
export default function SimpleText({ text }: Props) {
  return (
    <div className={'space-y-4'}>
      {text.split(/\n+/).map((p, i) => (
        <Para key={i} className={'m-0'}>
          {p}
        </Para>
      ))}
    </div>
  );
}
