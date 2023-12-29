import { Block } from '@/types/Block';

export type Page = {
  pageType: 'generic' | 'collection';
  title: string;
  path: string;
  text?: Array<Block>;
  blocks: Array<Block>;
};
