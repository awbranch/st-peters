import { ComponentProps } from '@/types/Component';
import { TeamListMember } from '@/types/TeamListMember';

export type TeamList = ComponentProps & {
  _type: 'teamList';
  members: TeamListMember[];
};
