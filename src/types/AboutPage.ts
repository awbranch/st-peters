import { History } from '@/types/History';
import { GoogleMap } from '@/types/GoogleMap';

export type AboutPage = {
  _id: string;
  history: History;
  map: GoogleMap;
};
