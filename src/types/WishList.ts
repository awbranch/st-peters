import { PortableTextBlock, Slug } from 'sanity';

export type WishList = {
  title: string;
  slug: Slug;
  description?: string;
  text: PortableTextBlock[];
};
