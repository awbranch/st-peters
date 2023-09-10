import { PortableTextBlock } from 'sanity';
import { SanityImage } from '@/types/SanityImage';

export type Program = {
  title: string;
  introImage: SanityImage;
  mainImage: SanityImage;
  text: PortableTextBlock[];
};
