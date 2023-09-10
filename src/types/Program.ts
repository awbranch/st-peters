import { PortableTextBlock, Slug } from 'sanity';
import { Image } from '@/types/Image';

export type Program = {
  title: string;
  slug: Slug;
  introImage: Image;
  mainImage: Image;
  text: PortableTextBlock[];
};
