import { Component } from '@/types/Component';
import { Slug } from 'sanity';
import { LabeledColor } from '@/types/Color';

export type Block = {
  id: Slug;
  background?: LabeledColor;
  components?: Component[];
};
