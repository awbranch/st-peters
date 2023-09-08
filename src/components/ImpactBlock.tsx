import React from 'react';
import Block from '@/components/Block';

import { ImpactStatement } from '@/types/ImpactStatement';
import RichText from '@/components/RichText';

interface Props {
  statement: ImpactStatement;
}

export default function ImpactBlock({ statement }: Props) {
  return (
    <Block bg="pink" center>
      <h1 className="text-xl uppercase">{statement.title}</h1>
      <div className="max-w-lg mx-auto mt-4">
        <RichText document={statement.description} />
      </div>

      <ul className="flex flex-row mt-4 p-2">
        {statement.impacts.map((i, k) => (
          <li key={k} className="flex-1">
            <div className="text-2xl">{i.value.toLocaleString('en-US')}</div>
            <div className="text max-w-[150px] mx-auto mt-1">{i.category}</div>
          </li>
        ))}
      </ul>
    </Block>
  );
}
