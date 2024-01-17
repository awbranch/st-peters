import { BlockProps } from '@/types/Block';
import { Image } from '@/types/Image';
import { Button } from '@/types/Button';
import { PortableTextBlock } from 'sanity';

export type CallToActionBlock = BlockProps & {
  _type: 'ctaBlock';
  alignment: 'left' | 'right';
  title?: string;
  text?: PortableTextBlock[];
  image: Image;
  button?: Button;
};
