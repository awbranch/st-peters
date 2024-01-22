import { BlockProps } from '@/types/Block';
import { PortableTextBlock } from 'sanity';

export type ArticleBlock = BlockProps & {
  _type: 'articleBlock';
  text: PortableTextBlock[];
};
