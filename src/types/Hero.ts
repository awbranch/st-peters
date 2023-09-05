import { PortableTextBlock, Image } from 'sanity';
import { Color } from '@/types/Color';

export type Hero = {
  _id: string;
  color: Color;
  text: PortableTextBlock[];
  image: Image;
  alt: string;
};
