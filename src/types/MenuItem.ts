import { Link } from '@/types/Link';

export type MenuItem = {
  name: string;
  action: 'link' | 'menu';
  url?: string;
  menu?: Link[];
};
