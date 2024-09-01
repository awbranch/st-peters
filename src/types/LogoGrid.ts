import { ComponentProps } from '@/types/Component';
import { LogoGridItem } from '@/types/LogoGridItem';

export type LogoGrid = ComponentProps & {
  _type: 'logoGrid';
  columns: number;
  items: LogoGridItem[];
};
