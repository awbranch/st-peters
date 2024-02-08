import { ButtonIcon } from '@/types/ButtonIcon';
import { ButtonStyle } from '@/types/ButtonStyle';

export type Button = {
  _type: 'button';
  _key: string;
  style: ButtonStyle;
  icon?: ButtonIcon;
  label: string;
  link: string;
};
