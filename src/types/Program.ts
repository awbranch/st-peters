import { PortableTextBlock, Image } from 'sanity';

export type Program = {
  title: string;
  introImage: Image;
  mainImage: Image;
  text: PortableTextBlock[];
  buttonLabel: string;
};
