import { PortableTextBlock, Slug } from 'sanity';
import { ColorStruct } from '@/types/Color';

export type LunchBlockConfig = {
  _type: 'lunchBlock';
  _key: string;
  slug: Slug;
  background: ColorStruct;
  title: string;
  text: PortableTextBlock[];
  tbd: string;
};
