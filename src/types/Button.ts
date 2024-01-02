import { ColorStruct } from '@/types/Color';
import { ButtonVariant } from '@/types/ButtonVariant';

export type Button = {
  _type: 'button';
  _key: string;
  color: ColorStruct;
  variant: ButtonVariant;
  label: string;
  link: string;
};
