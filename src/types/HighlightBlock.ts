import { BlockProps } from '@/types/Block';
import { PortableTextBlock } from 'sanity';
import { Image } from '@/types/Image';
import { Button } from '@/types/Button';

export type HighlightBlock = BlockProps & {
  _type: 'highlightBlock';
  alignment: 'left' | 'right';
  text: PortableTextBlock[];
  image: Image;
  button: Button;
  buttonLabel: string;
  buttonLink: string;
};
