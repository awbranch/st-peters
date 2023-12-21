import { PortableTextBlock, Slug } from 'sanity';
import { Image } from '@/types/Image';
import { ColorStruct } from '@/types/Color';

export type HighlightBlock = {
  _type: 'highlightBlock';
  _key: string;
  slug: Slug;
  background: ColorStruct;
  alignment: 'left' | 'right';
  text: PortableTextBlock[];
  image: Image;
  buttonLabel: string;
  buttonLink: string;
};
