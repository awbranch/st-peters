import { PortableTextBlock } from 'sanity';
import { Image } from '@/types/Image';

export type Team = {
  title: string;
  text: PortableTextBlock[];
  staffPhoto: Image;
  staffLabel: string;
  boardPhoto: Image;
  boardLabel: string;
};
