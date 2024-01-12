import { BlockProps } from '@/types/Block';
import { Image } from '@/types/Image';
import { Button } from '@/types/Button';
import { PortableTextBlock } from 'sanity';

export type HighlightBlock = BlockProps & {
  _type: 'highlightBlock';
  alignment: 'left' | 'right';
  title?: string;
  text?: PortableTextBlock[];
  image: Image;
  button?: Button;
  buttonLabel: string;
  buttonLink: string;
};
