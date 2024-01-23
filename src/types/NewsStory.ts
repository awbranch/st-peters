import { PortableTextBlock, Slug } from 'sanity';
import { Image } from '@/types/Image';
import { NewsCategory } from '@/types/NewsCategory';
import { Section } from '@/types/Section';

export type NewsStory = {
  categories: NewsCategory[];
  date: string;
  title: string;
  slug: Slug;
  summary: string;
  previewImage: Image;
  text: PortableTextBlock[];
  sections?: Section[];
};
