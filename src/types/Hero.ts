import { PortableTextBlock, Image } from 'sanity';

export type Hero = {
  title: string;
  text: PortableTextBlock[];
  image: Image;
  alt: string;
  buttonLabel: string;
};
