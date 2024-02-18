'use server';

import { ContactForm as Props } from '@/types/ContactForm';
import ContactFormClient from '@/components/ContactFormClient';
import { ListboxItem } from '@/components/Listbox';

export default async function ContactForm({ _key, subjects, palette }: Props) {
  // Strip the email out of the subjects so that it doesn't leak to the client
  const cleanSubjects: ListboxItem[] =
    subjects?.map((s) => ({
      id: s.id.current,
      name: s.name,
      image: s.image,
    })) || [];

  return (
    <ContactFormClient
      formKey={_key}
      subjects={cleanSubjects}
      palette={palette}
    />
  );
}
