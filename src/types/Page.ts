import { Block } from '@/types/Block';

export type Page = {
  variant: 'generic' | 'collection';
  title: string;
  path: string;
  text?: Array<Block>;
  blocks: Array<Block>;
};
