import { ComponentProps } from '@/types/Component';
import { TeamGridMember } from '@/types/TeamGridMember';

export type TeamGrid = ComponentProps & {
  _type: 'teamGrid';
  members: TeamGridMember[];
};
