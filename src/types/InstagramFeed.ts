import { PortableTextBlock } from 'sanity';

export type InstagramFeed = {
  title: string;
  text: PortableTextBlock[];
  config: string;
};
