import { BlockProps } from '@/types/Block';
import { PortableTextBlock } from 'sanity';
import { Impact } from '@/types/Impact';

export type ImpactBlock = BlockProps & {
  _type: 'impactBlock';
  text: PortableTextBlock[];
  impacts: Impact[];
};
