import { ComponentProps } from '@/types/Component';
import { Impact } from '@/types/Impact';

export type ImpactList = ComponentProps & {
  _type: 'impactList';
  impacts: Impact[];
};
