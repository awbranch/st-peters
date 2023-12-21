import { BlockProps } from '@/types/Block';
import { PortableTextBlock } from 'sanity';

export type InstagramBlock = BlockProps & {
  _type: 'instagramBlock';
  title: string;
  text: PortableTextBlock[];
  config: string;
};
