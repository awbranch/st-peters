'use server';

export const sendContactMessage = async (message: ContactFormMessage) => {
  console.log(message);

  // return {
  //   error: 'Something went wrong!',
  // };

  return {
    success: true,
  };
};
