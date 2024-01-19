import { BlockProps } from '@/types/Block';
import { Impact } from '@/types/Impact';

export type ImpactBlock = BlockProps & {
  _type: 'impactBlock';
  impacts: Impact[];
};
