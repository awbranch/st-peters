import { BlockProps } from '@/types/Block';
import { PortableTextBlock } from 'sanity';

export type TextBlock = BlockProps & {
  _type: 'textBlock';
  text: PortableTextBlock[];
};
