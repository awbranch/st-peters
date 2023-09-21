import { PortableTextBlock } from 'sanity';
import { WishList } from '@/types/WishList';

export type WishListPage = {
  title: string;
  text: PortableTextBlock[];
  wishlists: WishList[];
};
