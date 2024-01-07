import { BlockProps } from '@/types/Block';
import { TeamGridMember } from '@/types/TeamGridMember';

export type TeamGridBlock = BlockProps & {
  _type: 'teamGridBlock';
  title: string;
  text: string;
  members: TeamGridMember[];
};
