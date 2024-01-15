import { Block } from '@/types/Block';
import { Slug } from 'sanity';
import { Color } from '@/types/Color';

export type SectionBlock = {
  id: Slug;
  background: Color;
  block: Block;
};
