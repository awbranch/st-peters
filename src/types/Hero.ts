import { PortableTextBlock } from 'sanity';
import { Image } from '@/types/Image';

export type Hero = {
  title: string;
  text: PortableTextBlock[];
  image: Image;
  buttonLabel: string;
};
