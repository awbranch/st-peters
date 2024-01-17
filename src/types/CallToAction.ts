import { Image } from '@/types/Image';
import { Button } from '@/types/Button';
import { PortableTextBlock } from 'sanity';

export type CallToAction = {
  _key: string;
  alignment: 'left' | 'right';
  title?: string;
  text?: PortableTextBlock[];
  image: Image;
  button?: Button;
};
