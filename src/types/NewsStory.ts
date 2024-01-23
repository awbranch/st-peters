import { PortableTextBlock, Slug } from 'sanity';
import { Image } from '@/types/Image';

export type NewsStory = {
  category: string;
  date: string;
  title: string;
  slug: Slug;
  summary: string;
  previewImage: Image;
  text: PortableTextBlock[];
};
