import { File } from 'sanity';

export type Document = {
  _key: string;
  name: string;
  description: string;
  file: File;
};
