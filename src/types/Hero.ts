import { PortableTextBlock, Image } from 'sanity';
import { BgColor } from '@/types/Color';

export type Hero = {
  _id: string;
  color: BgColor;
  title: string;
  text: PortableTextBlock[];
  image: Image;
  alt: string;
};
