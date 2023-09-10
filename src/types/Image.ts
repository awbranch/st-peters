import { Image as SanityImage } from 'sanity';

export type Image = SanityImage & {
  alt: string;
};
