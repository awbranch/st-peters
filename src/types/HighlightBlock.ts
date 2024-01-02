import { BlockProps } from '@/types/Block';
import { Image } from '@/types/Image';
import { Button } from '@/types/Button';

export type HighlightBlock = BlockProps & {
  _type: 'highlightBlock';
  alignment: 'left' | 'right';
  title: string;
  subtitle: string;
  text: string;
  image: Image;
  button: Button;
  buttonLabel: string;
  buttonLink: string;
};
