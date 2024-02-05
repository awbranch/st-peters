import { PortableTextBlock } from 'sanity';
import { Image } from '@/types/Image';
import { ComponentProps } from '@/types/Component';
import { Button } from '@/types/Button';

export type Hero = ComponentProps & {
  _type: 'hero';
  text: PortableTextBlock[];
  image: Image;
  buttons?: Button[];
};
