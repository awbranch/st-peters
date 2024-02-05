import { ComponentProps } from '@/types/Component';
import { ContactFormSubject } from '@/types/ContactFormSubject';

export type ContactForm = ComponentProps & {
  _type: 'contactForm';
  catchAllEmail: string;
  subjects?: ContactFormSubject[];
};
