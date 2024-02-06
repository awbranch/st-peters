import { Component } from '@/types/Component';
import { Slug } from 'sanity';
import { LabeledColor } from '@/types/Color';

export type Block = {
  _key: string;
  id: Slug;
  background?: LabeledColor;
  components?: Component[];
};
