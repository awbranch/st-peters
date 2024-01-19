import { Block } from '@/types/Block';
import { Slug } from 'sanity';
import { LabeledColor } from '@/types/Color';

export type Section = {
  id: Slug;
  background?: LabeledColor;
  blocks?: Array<Block>;
};
