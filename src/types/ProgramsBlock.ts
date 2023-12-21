import { BlockProps } from '@/types/Block';
import { PortableTextBlock } from 'sanity';

export type ProgramsBlock = BlockProps & {
  _type: 'programsBlock';
  text: PortableTextBlock[];
};
