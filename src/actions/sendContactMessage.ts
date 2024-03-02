'use server';

import { ContactMessage } from '@/types/ContactMessage';
import { ContactMessageSchema } from '@/schemas/ContactMessageSchema';
import { getPageComponent } from '@/utils/sanity';
import { errorToString, trim } from '@/utils/utils';
import { ContactFormSubject } from '@/types/ContactFormSubject';
import { sentMessageInfoToString, transporter } from '@/utils/mail';

export const sendContactMessage = async (
  pagePath: string,
  formKey: string,
  message: ContactMessage,
) => {
  try {
    const results = ContactMessageSchema.safeParse(message);

    // Reparse the results
    if (!results.success) {
      const errors = results.error.flatten();
      console.error('Contact Message: Invalid message format', errors);
      return {
        success: false,
        message:
          'Invalid message format\n' +
          errors.formErrors.join('\n') +
          Object.values(errors.fieldErrors).flat().join('\n'),
      };
    }

    const cleanMessage = results.data;

    const contactForm = await getPageComponent(pagePath, formKey);

    if (!contactForm) {
      console.error(
        `Contact Message: Invalid form key: "${formKey}" on page path: "${pagePath}"`,
      );
      return {
        success: false,
        message: 'Invalid form key',
      };
    }

    if (contactForm._type !== 'contactForm') {
      console.error(
        `Contact Message: Invalid form type: "${contactForm._type}" for form key "${formKey}" on page path: "${pagePath}"`,
      );
      return {
        success: false,
        message: 'Invalid form type',
      };
    }

    const subject = contactForm.subjects?.find(
      (s) => s.id.current === cleanMessage.subject,
    );

    if (!subject) {
      console.error(
        `Contact Message: Invalid subject: "${cleanMessage.subject}" for form key "${formKey}" on page path: "${pagePath}"`,
      );
      return {
        success: false,
        message: 'Invalid subject',
      };
    }

    // Email St. Peter's with the contact message
    const destStatus = await transporter.sendMail({
      from: process.env.BRANCH_STUDIO_EMAIL_FROM,
      to: subject.emailTo.split(',').map((e) => e.trim()),
      cc: contactForm.catchAllEmail,
      subject: `Contact Message: ${subject.name}`,
      text: buildDestMessage(subject, cleanMessage),
    });

    console.log(
      'Message destination email response: ' +
        sentMessageInfoToString(destStatus),
    );

    // Send a confirmation email to the person that filled in the contact form
    const confStatus = await transporter.sendMail({
      from: process.env.BRANCH_STUDIO_EMAIL_FROM,
      to: message.email,
      subject: contactForm.confSubject,
      text: buildConfirmationResponse(contactForm.confTemplate, cleanMessage),
    });

    console.log(
      'Message confirmation email response: ' +
        sentMessageInfoToString(confStatus),
    );
  } catch (e) {
    return {
      success: false,
      message: errorToString(e),
    };
  }

  return {
    success: true,
    message: "Your message was successfully sent to St. Peter's Kitchen",
  };
};

function buildDestMessage(
  subject: ContactFormSubject,
  message: ContactMessage,
) {
  return trim`Contact Message
  Subject: ${subject.name}
  From: ${message.firstName} ${message.lastName} 
  ${message.email}${message.phoneNumber ? '\n' + message.phoneNumber : ''}

  ${message.message}`;
}

function buildConfirmationResponse(
  emailTemplate: string,
  message: ContactMessage,
) {
  let text = emailTemplate;
  const { firstName, lastName } = message;
  text = text.replace('{{firstName}}', firstName);
  text = text.replace('{{lastName}}', lastName);
  return text;
}
