import { File } from 'sanity';

export type DocumentListItem = {
  _key: string;
  name: string;
  description: string;
  file: File;
};
