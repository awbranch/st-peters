import { Section } from '@/types/Section';
import { PageWidth } from '@/types/PageWidth';

export type Page = {
  path: string;
  maxWidth: PageWidth;
  sections?: Array<Section>;
};
