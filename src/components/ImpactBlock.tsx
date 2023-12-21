import React from 'react';
import Block from '@/components/Block';
import RichText from '@/components/RichText';
import { ImpactBlock as Props } from '@/types/ImpactBlock';

export default function ImpactBlock({
  slug,
  background,
  narrow,
  text,
  impacts,
}: Props) {
  return (
    <Block slug={slug.current} color={background?.label} center narrow={narrow}>
      <div className="max-w-lg mx-auto">
        <RichText text={text} />
      </div>

      <ul className="flex flex-col lg:flex-row mt-4 p-2 gap-6 lg:gap-2">
        {impacts.map((i, k) => (
          <li key={k} className="flex-1">
            <div className="text-3xl">{i.value.toLocaleString('en-US')}</div>
            <div className="text max-w-[150px] mx-auto mt-1">{i.category}</div>
          </li>
        ))}
      </ul>
    </Block>
  );
}
