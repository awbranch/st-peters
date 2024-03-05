import { Block } from '@/types/Block';
import { PageWidth } from '@/types/PageWidth';
import { Image } from '@/types/Image';

export type Page = {
  path: string;
  title: string;
  description: string;
  maxWidth: PageWidth;
  blocks?: Block[];
  socialImage?: Image;
};
