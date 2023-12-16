import { PortableTextBlock, Slug } from 'sanity';
import { ColorStruct } from '@/types/Color';

export type GoogleMapBlockConfig = {
  _type: 'googleMapBlock';
  _key: string;
  slug: Slug;
  background: ColorStruct;
  text: PortableTextBlock[];
  embedURL: string;
};
