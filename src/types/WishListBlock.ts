import { BlockProps } from '@/types/Block';
import { PortableTextBlock } from 'sanity';

export type WishListBlock = BlockProps & {
  _type: 'wishListBlock';
  title: string;
  description?: PortableTextBlock[];
  text: PortableTextBlock[];
};
