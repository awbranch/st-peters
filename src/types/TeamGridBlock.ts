import { BlockProps } from '@/types/Block';
import { TeamGridMember } from '@/types/TeamGridMember';

export type TeamGridBlock = BlockProps & {
  _type: 'teamGridBlock';
  members: TeamGridMember[];
};
