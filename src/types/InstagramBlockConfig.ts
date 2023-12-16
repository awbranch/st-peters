import { PortableTextBlock, Slug } from 'sanity';
import { ColorStruct } from '@/types/Color';

export type InstagramBlockConfig = {
  _type: 'instagramBlock';
  _key: string;
  slug: Slug;
  background: ColorStruct;
  title: string;
  text: PortableTextBlock[];
  config: string;
};
