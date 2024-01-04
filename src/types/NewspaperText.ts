import { PortableTextBlock } from 'sanity';

export type NewspaperText = {
  _type: 'newspaperText';
  _key: string;
  maxColumns: number;
  text: PortableTextBlock[];
};
