import { History } from '@/types/History';
import { GoogleMap } from '@/types/GoogleMap';
import { Team } from '@/types/Team';
import { JobOpenings } from '@/types/JobOpenings';

export type AboutPage = {
  _id: string;
  history: History;
  map: GoogleMap;
  team: Team;
  jobOpenings: JobOpenings;
};
