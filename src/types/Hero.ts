import { PortableTextBlock } from 'sanity';
import { SanityImage } from '@/types/SanityImage';

export type Hero = {
  title: string;
  text: PortableTextBlock[];
  image: SanityImage;
  alt: string;
  buttonLabel: string;
};
