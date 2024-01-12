import { BlockProps } from '@/types/Block';
import { PortableTextBlock } from 'sanity';

export type LunchBlock = BlockProps & {
  _type: 'lunchBlock';
  title?: string;
  text?: PortableTextBlock[];
  tbd: string;
};
