import { PortableTextBlock, Slug } from 'sanity';
import { Image } from '@/types/Image';
import { NewsCategory } from '@/types/NewsCategory';
import { Component } from '@/types/Component';
import { Block } from '@/types/Block';

export type NewsStory = {
  _id: string;
  categories: NewsCategory[];
  date: string;
  title: string;
  slug: Slug;
  summary: string;
  previewImage: Image;
  text: PortableTextBlock[];
  components?: Component[];
  blocks?: Block[];
};
