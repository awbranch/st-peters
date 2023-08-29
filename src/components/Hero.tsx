import React from 'react';
import { Color } from '@/types/Color';
import Block from '@/components/Block';
import Para from '@/components/Para';

interface Props {
  bg: Color;
  header: string;
  text: string;
  btnLabel: string;
  btnHref: string;
  image: string;
}

export default function Hero({
  bg,
  header,
  text,
  btnLabel,
  btnHref,
  image,
}: Props) {
  return (
    <Block bg={bg}>
      <h1 className="text-2xl uppercase">{header}</h1>
      <Para>{text}</Para>
    </Block>
  );
}
