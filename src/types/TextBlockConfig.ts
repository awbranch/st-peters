import { PortableTextBlock, Slug } from 'sanity';
import { ColorStruct } from '@/types/Color';

export type TextBlockConfig = {
  _type: 'textBlock';
  _key: string;
  slug: Slug;
  background: ColorStruct;
  text: PortableTextBlock[];
};
