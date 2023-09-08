import { PortableTextBlock } from 'sanity';
import { LunchMenu } from '@/types/LunchMenu';

export type LunchPlan = {
  title: string;
  text: PortableTextBlock[];
  tbd: string;
  menus: LunchMenu[];
};
