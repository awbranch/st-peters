export type MenuItem =
  | {
      _key: string;
      name: string;
      action: 'link';
      url: string;
      menu?: never;
    }
  | {
      _key: string;
      name: string;
      action: 'menu';
      url?: never;
      menu: MenuItem[];
    };
