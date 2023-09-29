import { Slug } from 'sanity';

export type NewsCategory = {
  title: string;
  name: Slug;
  order: number;
};
