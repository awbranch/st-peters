import React from 'react';

type Props = {
  className?: string;
  text: string;
  render: (part: string, index: number) => React.ReactNode;
};

export default function TextSplit({ className, text, render }: Props) {
  return (
    <div className={className}>
      {text.split(/\n+/).map((t, i) => (
        <React.Fragment key={i}>{render(t, i)}</React.Fragment>
      ))}
    </div>
  );
}
