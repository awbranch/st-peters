import { PortableTextBlock, Image } from 'sanity';

export type Highlight = {
  title: string;
  text: PortableTextBlock[];
  image: Image;
  alt: string;
  buttonLabel: string;
  buttonLink: string;
};
