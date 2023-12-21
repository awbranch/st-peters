import { BlockProps } from '@/types/Block';
import { PortableTextBlock } from 'sanity';
import { Image } from '@/types/Image';

export type HighlightBlock = BlockProps & {
  _type: 'highlightBlock';
  alignment: 'left' | 'right';
  text: PortableTextBlock[];
  image: Image;
  buttonLabel: string;
  buttonLink: string;
};
