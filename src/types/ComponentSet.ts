import { Component } from '@/types/Component';
import { Color } from '@/types/Color';

export type ComponentSet = {
  _id: string;
  _type: 'ComponentSet';
  name: string;
  background: Color;
  components: Component[];
};
