import { BlockProps } from '@/types/Block';
import { ContactFormSubject } from '@/types/ContactFormSubject';

export type ContactFormBlock = BlockProps & {
  _type: 'contactFormBlock';
  catchAllEmail: string;
  subjects?: ContactFormSubject[];
};
