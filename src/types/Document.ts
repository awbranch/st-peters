import { File } from 'sanity';

export type Document = {
  name: string;
  description: string;
  file: File;
};
