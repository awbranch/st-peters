import { BlockProps } from '@/types/Block';
import { PortableTextBlock } from 'sanity';
import { Image } from '@/types/Image';

export type TeamBlock = BlockProps & {
  _type: 'teamBlock';
  text: PortableTextBlock[];
  staffPhoto: Image;
  staffLabel: string;
  boardPhoto: Image;
  boardLabel: string;
};
