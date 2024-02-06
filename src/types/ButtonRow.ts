import { Button } from '@/types/Button';
import { Alignment } from '@/types/Alignment';
import { ComponentProps } from '@/types/Component';

export type ButtonRow = ComponentProps & {
  _type: 'buttonRow';
  alignment: Alignment;
  buttons: Button[];
};
