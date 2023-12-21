import { PortableTextBlock, Slug } from 'sanity';
import { Image } from '@/types/Image';
import { ColorStruct } from '@/types/Color';

export type HeroBlock = {
  _type: 'heroBlock';
  _key: string;
  slug: Slug;
  background: ColorStruct;
  text: PortableTextBlock[];
  image: Image;
  buttonLabel?: string;
  buttonLink?: string;
};
