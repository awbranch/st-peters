export type MenuItem =
  | {
      name: string;
      action: 'link';
      url: string;
      menu?: never;
    }
  | {
      name: string;
      action: 'menu';
      url?: never;
      menu: MenuItem[];
    };
