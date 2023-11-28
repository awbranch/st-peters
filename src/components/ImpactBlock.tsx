import React from 'react';
import Block from '@/components/Block';
import RichText from '@/components/RichText';
import { PortableTextBlock } from 'sanity';
import { Impact } from '@/types/Impact';

type Props = {
  title: string;
  text: PortableTextBlock[];
  impacts: Impact[];
};

export default function ImpactBlock({ title, text, impacts }: Props) {
  return (
    <Block color="black" center>
      <h1 className="text-xl">{title}</h1>
      <div className="max-w-lg mx-auto mt-4">
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
