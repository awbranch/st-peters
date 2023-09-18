import { PortableTextBlock } from 'sanity';

export type LunchPlan = {
  title: string;
  text: PortableTextBlock[];
  tbd: string;
};
