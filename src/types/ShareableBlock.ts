import { Block } from '@/types/Block';
import { Color } from '@/types/Color';

export type ShareableBlock = {
  _type: 'shareableBlock';
  name: string;
  background: Color;
  block: Block[];
};
