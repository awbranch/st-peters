import React from 'react';
import Block from '@/components/Block';
import RichText from '@/components/RichText';
import { WishListBlock } from '@/types/WishListBlock';

export default function WishListBlock({
  slug,
  background,
  narrow,
  title,
  description,
  text,
}: WishListBlock) {
  return (
    <Block slug={slug.current} color={background?.label} narrow={narrow}>
      <h1 className={'text-2xl font-semibold py-2'}>{title}</h1>
      {description && <RichText text={description} />}
      <div className={'columns-1 sm:columns-2'}>
        <RichText text={text} />
      </div>
    </Block>
  );
}
