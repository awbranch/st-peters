'use server';

import { sleep } from '@/utils/utils';

export const sendContactMessage = async (message: ContactFormMessage) => {
  console.log(message);

  // Validate the message

  // return {
  //   error: 'Something went wrong!',
  // };

  await sleep(2000);

  throw Error('There was an error on the server');

  return {
    success: true,
  };
};
