import { PortableTextBlock, Slug } from 'sanity';
import { ColorStruct } from '@/types/Color';

export type ProgramsBlockConfig = {
  _type: 'programsBlock';
  _key: string;
  slug: Slug;
  background: ColorStruct;
  title: string;
  text: PortableTextBlock[];
};
