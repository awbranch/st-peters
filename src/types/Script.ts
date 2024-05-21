import { ComponentProps } from '@/types/Component';

export type Script = ComponentProps & {
  _type: 'script';
  code: string;
};
