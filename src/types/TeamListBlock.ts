import { BlockProps } from '@/types/Block';
import { TeamListMember } from '@/types/TeamListMember';

export type TeamListBlock = BlockProps & {
  _type: 'teamListBlock';
  members: TeamListMember[];
};
