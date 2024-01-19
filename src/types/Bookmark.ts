import { Slug } from 'sanity';

export type Bookmark = {
  _type: 'bookmark';
  _key: string;
  id: Slug;
};
