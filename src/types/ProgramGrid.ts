import { PortableTextBlock } from 'sanity';
import { Program } from '@/types/Program';

export type ProgramGrid = {
  title: string;
  text: PortableTextBlock[];
  programs: Program[];
};
