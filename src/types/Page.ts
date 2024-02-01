import { Section } from '@/types/Section';
import { PageWidth } from '@/types/PageWidth';

export type Page = {
  path: string;
  title: string;
  description: string;
  maxWidth: PageWidth;
  sections?: Section[];
};
