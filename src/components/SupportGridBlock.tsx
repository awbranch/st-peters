import React from 'react';
import Block from '@/components/Block';
import RichText from '@/components/RichText';
import { PortableTextBlock } from 'sanity';
import { SupportItem } from '@/types/SupportItem';
import { SupportItemCard } from '@/components/SupportItemCard';

type Props = {
  title: string;
  text: PortableTextBlock[];
  items: SupportItem[];
};

export default async function SupportGridBlock({ title, text, items }: Props) {
  return (
    <Block color={'pink'}>
      <div className={'max-w-[930px] mx-auto'}>
        <h1 className="text-xl uppercase mb-4">{title}</h1>
        <RichText text={text} />
        <div className={'text-center'}>
          <div className="inline-grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6 mt-4">
            {items.map((item, i) => (
              <SupportItemCard key={i} item={item} />
            ))}
          </div>
        </div>
      </div>
    </Block>
  );
}
