import { BlockProps } from '@/types/Block';
import { TeamListMember } from '@/types/TeamListMember';
import { PortableTextBlock } from 'sanity';

export type TeamListBlock = BlockProps & {
  _type: 'teamListBlock';
  title?: string;
  text?: PortableTextBlock[];
  members: TeamListMember[];
};
