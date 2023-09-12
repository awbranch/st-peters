import { PortableTextBlock, Slug } from 'sanity';
import { Image } from '@/types/Image';

export type History = {
  title: string;
  slug: Slug;
  image: Image;
  text: PortableTextBlock[];
};
