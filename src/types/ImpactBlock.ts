import { BlockProps } from '@/types/Block';
import { Impact } from '@/types/Impact';
import { PortableTextBlock } from 'sanity';

export type ImpactBlock = BlockProps & {
  _type: 'impactBlock';
  title?: string;
  text?: PortableTextBlock[];
  impacts: Impact[];
};
