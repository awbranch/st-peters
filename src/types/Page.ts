import { SectionBlock } from '@/types/SectionBlock';
import { PageWidth } from '@/types/PageWidth';

export type Page = {
  path: string;
  maxWidth: PageWidth;
  blocks?: Array<SectionBlock>;
};
