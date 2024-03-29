import { ComponentProps } from '@/types/Component';
import { Image } from '@/types/Image';
import { Button } from '@/types/Button';
import { PortableTextBlock } from 'sanity';

export type CallToAction = ComponentProps & {
  _type: 'callToAction';
  alignment: 'left' | 'right';
  title?: string;
  text?: PortableTextBlock[];
  image: Image;
  button?: Button;
};
