'use server';

import { ContactMessage } from '@/types/ContactMessage';
import { ContactMessageSchema } from '@/schemas/ContactMessageSchema';
import { getEmailTemplate, getPageByPath } from '@/utils/sanity-utils';
import nodemailer from 'nodemailer';
import { errorToString } from '@/utils/utils';
import { EmailTemplate } from '@/types/EmailTemplate';
import { ContactFormSubject } from '@/types/ContactFormSubject';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.BRANCH_STUDIO_SMTP_USER,
    pass: process.env.BRANCH_STUDIO_SMTP_PASS,
  },
  logger: true,
  debug: true,
});

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
      console.error('Contact Form Message: Invalid message format', errors);
      return {
        success: false,
        message:
          'Invalid message format\n' +
          errors.formErrors.join('\n') +
          Object.values(errors.fieldErrors).flat().join('\n'),
      };
    }

    // Get the email address for the selected subject
    const cleanMessage = results.data;

    // Look up the contact information
    const page = await getPageByPath(pagePath);
    if (!page) {
      console.error(`Contact Form Message: Page path not found: "${pagePath}"`);
      return {
        success: false,
        message: 'Page path not found',
      };
    }

    const contactForm = page.blocks
      ?.flatMap((b) => b.components || [])
      .find((c) => c._key === formKey);

    if (!contactForm) {
      console.error(
        `Contact Form Message: Invalid form key: "${formKey}" on page path: "${pagePath}"`,
      );
      return {
        success: false,
        message: 'Invalid form key',
      };
    }

    if (contactForm._type !== 'contactForm') {
      console.error(
        `Contact Form Message: Invalid form type: "${contactForm._type}" for form key "${formKey}" on page path: "${pagePath}"`,
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
        `Contact Form Message: Invalid subject: "${cleanMessage.subject}" for form key "${formKey}" on page path: "${pagePath}"`,
      );
      return {
        success: false,
        message: 'Invalid subject',
      };
    }

    const templateName = 'contact-form-confirmation';

    // Fetch the email template
    let emailTemplate = await getEmailTemplate(templateName);
    if (!emailTemplate) {
      console.error(
        `Contact Form Message: Email template now found: "${emailTemplate}"`,
      );
      return {
        success: false,
        message: 'Email template not found',
      };
    }

    // Email the subjectEmail and CC the catchAllEmail
    const destStatus = await transporter.sendMail({
      from: process.env.BRANCH_STUDIO_EMAIL_FROM,
      to: subject.emailTo,
      cc: contactForm.catchAllEmail,
      subject: `Contact Form Message: ${subject.name}`,
      text: buildDestMessage(subject, message),
    });

    console.log(
      `Message destination email response: ${destStatus.response} id: ${
        destStatus.messageId
      } accepted: ${JSON.stringify(
        destStatus.accepted,
      )} rejected: ${JSON.stringify(destStatus.rejected)}`,
    );

    // Send a confirmation email to the person that filled in the contact form
    const confStatus = await transporter.sendMail({
      from: process.env.BRANCH_STUDIO_EMAIL_FROM,
      to: message.email,
      subject: emailTemplate.subject,
      text: buildConfirmationResponse(emailTemplate, message),
    });

    console.log(
      `Message confirmation email response: ${confStatus.response} id: ${
        confStatus.messageId
      } accepted: ${JSON.stringify(
        confStatus.accepted,
      )} rejected: ${JSON.stringify(confStatus.rejected)}`,
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
  return (
    'Subject: ' +
    subject.name +
    '\n' +
    'From: ' +
    message.firstName +
    ' ' +
    message.lastName +
    '\n' +
    message.email +
    (message.phoneNumber ? '\n' + message.phoneNumber : '') +
    '\n\n---\n\n' +
    message.message
  );
}

function buildConfirmationResponse(
  emailTemplate: EmailTemplate,
  message: ContactMessage,
) {
  let text = emailTemplate.template;
  const { firstName, lastName } = message;
  text = text.replace('{{firstName}}', firstName);
  text = text.replace('{{lastName}}', lastName);
  return text;
}
