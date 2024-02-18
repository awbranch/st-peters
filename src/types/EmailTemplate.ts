import { Slug } from 'sanity';

export type EmailTemplate = {
  id: Slug;
  subject: string;
  template: string;
};
