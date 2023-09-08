import { PortableTextBlock } from 'sanity';
import { Impact } from '@/types/Impact';

export type ImpactStatement = {
  title: string;
  description: PortableTextBlock[];
  impacts: Impact[];
};
