import { PortableTextBlock, Slug } from 'sanity';
import { ColorStruct } from '@/types/Color';
import { Image } from '@/types/Image';

export type TeamBlockConfig = {
  _type: 'teamBlock';
  _key: string;
  slug: Slug;
  background: ColorStruct;
  text: PortableTextBlock[];
  staffPhoto: Image;
  staffLabel: string;
  boardPhoto: Image;
  boardLabel: string;
};
