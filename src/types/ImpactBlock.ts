import { BlockProps } from '@/types/Block';
import { Impact } from '@/types/Impact';

export type ImpactBlock = BlockProps & {
  _type: 'impactBlock';
  title: string;
  subtitle: string;
  text: string;
  impacts: Impact[];
};
