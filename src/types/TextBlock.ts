import { BlockProps } from '@/types/Block';
import { PortableTextBlock } from 'sanity';
import { Alignment } from '@/types/Alignment';

export type TextBlock = BlockProps & {
  _type: 'textBlock';
  alignment: Alignment;
  text: PortableTextBlock[];
};
