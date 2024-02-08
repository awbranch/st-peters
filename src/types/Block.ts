import { Component } from '@/types/Component';
import { Slug } from 'sanity';
import { Palette } from '@/types/Palette';

export type Block = {
  _key: string;
  id: Slug;
  palette: Palette;
  components?: Component[];
};
