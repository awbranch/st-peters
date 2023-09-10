import { PortableTextBlock, Slug } from 'sanity';
import { Image } from '@/types/Image';

export type Highlight = {
  title: string;
  slug: Slug;
  text: PortableTextBlock[];
  image: Image;
  alt: string;
  buttonLabel: string;
  buttonLink: string;
};
