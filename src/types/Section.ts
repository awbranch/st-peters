import { Block } from '@/types/Block';
import { Slug } from 'sanity';
import { ColorStruct } from '@/types/Color';

export type Section = {
  id: Slug;
  background?: ColorStruct;
  narrow?: boolean;
  blocks: Array<Block>;
};
