import { PortableTextBlock, Slug } from 'sanity';
import { Image } from '@/types/Image';
import { ColorStruct } from '@/types/Color';

export type HighlightBlockConfig = {
  _type: 'highlightBlock';
  _key: string;
  slug: Slug;
  background: ColorStruct;
  alignment: 'left' | 'right';
  title: string;
  text: PortableTextBlock[];
  image: Image;
  buttonLabel: string;
  buttonLink: string;
};
