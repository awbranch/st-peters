import { BlockProps } from '@/types/Block';
import { PortableTextBlock } from 'sanity';

export type LunchBlock = BlockProps & {
  _type: 'lunchBlock';
  text: PortableTextBlock[];
  tbd: string;
};
