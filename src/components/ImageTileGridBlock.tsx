import React from 'react';
import { ButtonTileGridBlock as Props } from '@/types/ButtonTileGridBlock';

export default async function ImageTileGridBlock({ id, buttons }: Props) {
  return <div id={id?.current}></div>;
}
