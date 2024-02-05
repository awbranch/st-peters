import { Block } from '@/types/Block';
import { PageWidth } from '@/types/PageWidth';

export type Page = {
  path: string;
  title: string;
  description: string;
  maxWidth: PageWidth;
  blocks?: Block[];
};
