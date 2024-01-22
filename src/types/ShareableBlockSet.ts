import { Block } from '@/types/Block';
import { Color } from '@/types/Color';

export type ShareableBlockSet = {
  _type: 'shareableBlockSet';
  name: string;
  background: Color;
  blocks: Block[];
};
