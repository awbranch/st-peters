import { Block } from '@/types/Block';
import { Section } from '@/types/Section';

export type Page = {
  variant: 'generic' | 'collection';
  path: string;
  text?: Array<Block>;
  blocks: Array<Block>;
  sections?: Array<Section>;
};
