import { LabeledColor } from '@/types/Color';
import { ButtonVariant } from '@/types/ButtonVariant';
import { ButtonIcon } from '@/types/ButtonIcon';

export type Button = {
  _type: 'button';
  _key: string;
  color: LabeledColor;
  variant: ButtonVariant;
  icon?: ButtonIcon;
  label: string;
  link: string;
};
