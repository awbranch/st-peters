import { Component } from '@/types/Component';
import { Slug } from 'sanity';
import { Palette } from '@/types/Palette';

export type Block = {
  _key: string;
  id: Slug;
  hidden: boolean;
  palette: Palette;
  components?: Component[];
};
