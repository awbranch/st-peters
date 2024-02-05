import { PortableTextBlock, Slug } from 'sanity';
import { Image } from '@/types/Image';
import { NewsCategory } from '@/types/NewsCategory';
import { Block } from '@/types/Block';

export type NewsStory = {
  categories: NewsCategory[];
  date: string;
  title: string;
  slug: Slug;
  summary: string;
  previewImage: Image;
  text: PortableTextBlock[];
  blocks?: Block[];
};
