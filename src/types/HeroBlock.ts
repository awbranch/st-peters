import { PortableTextBlock } from 'sanity';
import { Image } from '@/types/Image';
import { BlockProps } from '@/types/Block';
import { Button } from '@/types/Button';

export type HeroBlock = BlockProps & {
  _type: 'heroBlock';
  text: PortableTextBlock[];
  image: Image;
  buttons?: Button[];
};
