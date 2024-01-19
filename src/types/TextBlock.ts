import { BlockProps } from '@/types/Block';
import { PortableTextBlock } from 'sanity';

export type TextBlock = BlockProps & {
  _type: 'textBlock';
  alignment: 'left' | 'center' | 'right';
  text: PortableTextBlock[];
};
