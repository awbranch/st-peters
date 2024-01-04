import { ColorStruct } from '@/types/Color';
import { ButtonVariant } from '@/types/ButtonVariant';
import { ButtonIcon } from '@/types/ButtonIcon';

export type Button = {
  _type: 'button';
  _key: string;
  color: ColorStruct;
  variant: ButtonVariant;
  icon?: ButtonIcon;
  label: string;
  link: string;
};
