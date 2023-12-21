import { PortableTextBlock } from 'sanity';
import { Image } from '@/types/Image';
import { BlockProps } from '@/types/Block';

export type HeroBlock = BlockProps & {
  _type: 'heroBlock';
  text: PortableTextBlock[];
  image: Image;
  buttonLabel?: string;
  buttonLink?: string;
};
