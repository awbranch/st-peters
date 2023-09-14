import React from 'react';
import Para from '@/components/Para';

interface Props {
  text: string;
}

/**
 * Breaks a string delimited by newlines into a set of paragraphs
 */
export default function SimpleText({ text }: Props) {
  return (
    <>
      {text.split(/\n+/).map((p, i) => (
        <Para key={i}>{p}</Para>
      ))}
    </>
  );
}
