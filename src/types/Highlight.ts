import { PortableTextBlock, Image } from 'sanity';
import { SanityImage } from '@/types/SanityImage';

export type Highlight = {
  title: string;
  text: PortableTextBlock[];
  image: SanityImage;
  alt: string;
  buttonLabel: string;
  buttonLink: string;
};
