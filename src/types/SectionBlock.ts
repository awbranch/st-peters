import { Block } from '@/types/Block';
import { Slug } from 'sanity';
import { LabeledColor } from '@/types/Color';

export type SectionBlock = {
  id: Slug;
  background?: LabeledColor;
  block: Block;
};
