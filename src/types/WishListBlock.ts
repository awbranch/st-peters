import { PortableTextBlock, Slug } from 'sanity';
import { ColorStruct } from '@/types/Color';

export type WishListBlock = {
  _type: 'wishListBlock';
  _key: string;
  slug: Slug;
  background: ColorStruct;
  title: string;
  description?: PortableTextBlock[];
  text: PortableTextBlock[];
};
