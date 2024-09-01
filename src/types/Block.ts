import { Component } from '@/types/Component';
import { Slug } from 'sanity';
import { Palette } from '@/types/Palette';
import { PageWidth } from '@/types/PageWidth';

export type Block = {
  _key: string;
  id: Slug;
  hidden: boolean;
  palette: Palette;
  components?: Component[];
  maxWidth: PageWidth;
};
