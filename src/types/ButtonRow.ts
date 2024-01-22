import { Button } from '@/types/Button';
import { Alignment } from '@/types/Alignment';

export type ButtonRow = {
  _type: 'buttonRow';
  _key: string;
  alignment: Alignment;
  buttons: Button[];
};
