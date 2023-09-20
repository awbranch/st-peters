import { PortableTextBlock } from 'sanity';

export type FAQ = {
  question: string;
  answer: PortableTextBlock[];
};
