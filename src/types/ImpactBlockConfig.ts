import { PortableTextBlock, Slug } from 'sanity';
import { Impact } from '@/types/Impact';
import { ColorStruct } from '@/types/Color';

export type ImpactBlockConfig = {
  _type: 'impactBlock';
  _key: string;
  slug: Slug;
  background: ColorStruct;
  title: string;
  text: PortableTextBlock[];
  impacts: Impact[];
};
