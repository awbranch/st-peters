import { BlockProps } from '@/types/Block';

export type LunchBlock = BlockProps & {
  _type: 'lunchBlock';
  title: string;
  subtitle: string;
  text: string;
  tbd: string;
};
