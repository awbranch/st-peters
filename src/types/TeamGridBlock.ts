import { BlockProps } from '@/types/Block';
import { TeamGridMember } from '@/types/TeamGridMember';
import { PortableTextBlock } from 'sanity';

export type TeamGridBlock = BlockProps & {
  _type: 'teamGridBlock';
  title?: string;
  text?: PortableTextBlock[];
  members: TeamGridMember[];
};
