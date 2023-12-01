import { PortableTextBlock } from 'sanity';
import { Image } from '@/types/Image';

export type Hero = {
  text: PortableTextBlock[];
  image: Image;
  buttonLabel?: string;
  buttonLink?: string;
};
