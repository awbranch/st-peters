'use server';

import { ContactMessage } from '@/types/ContactMessage';
import { ContactMessageSchema } from '@/schemas/ContactMessageSchema';
import { sleep } from '@/utils/utils';

export const sendContactMessage = async (message: ContactMessage) => {
  const results = ContactMessageSchema.safeParse(message);

  await sleep(5000);

  if (!results.success) {
    const errors = results.error.flatten();
    return {
      success: false,
      message:
        'There was an error sending your message:\n' +
        errors.formErrors.join('\n') +
        Object.values(errors.fieldErrors).flat().join('\n'),
    };
  }

  return {
    success: true,
    message: 'Your message was successfully sent.',
  };
};
