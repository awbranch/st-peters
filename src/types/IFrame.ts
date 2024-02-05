import { ComponentProps } from '@/types/Component';

export type IFrame = ComponentProps & {
  _type: 'iframe';
  code: string;
};
