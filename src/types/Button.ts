import { ColorStruct } from '@/types/Color';

export type Button = {
  _type: 'button';
  _key: string;
  color: ColorStruct;
  variant: 'primary' | 'secondary';
  label: string;
  link: string;
};
