import { History } from '@/types/History';
import { GoogleMap } from '@/types/GoogleMap';
import { Team } from '@/types/Team';
import { JobsBoard } from '@/types/JobsBoard';

export type AboutPage = {
  _id: string;
  history: History;
  map: GoogleMap;
  team: Team;
  jobsBoard: JobsBoard;
};
