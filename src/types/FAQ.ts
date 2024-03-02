import { PortableTextBlock } from 'sanity';

export type FAQ = {
  _key: string;
  question: string;
  answer: PortableTextBlock[];
};
