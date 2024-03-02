'use server';

import { VolunteerMessage } from '@/types/VolunteerMessage';
import { VolunteerMessageSchema } from '@/schemas/VolunteerMessageSchema';
import { getPageComponent } from '@/utils/sanity';
import { sentMessageInfoToString, transporter } from '@/utils/mail';
import { trim } from '@/utils/utils';

export const sendVolunteerMessage = async (
  pagePath: string,
  formKey: string,
  message: VolunteerMessage,
) => {
  const results = VolunteerMessageSchema.safeParse(message);

  // Reparse the results
  if (!results.success) {
    const errors = results.error.flatten();
    console.error('Volunteer Message: Invalid message format', errors);
    return {
      success: false,
      message:
        'Invalid message format\n' +
        errors.formErrors.join('\n') +
        Object.values(errors.fieldErrors).flat().join('\n'),
    };
  }

  const cleanMessage = results.data;

  const volunteerForm = await getPageComponent(pagePath, formKey);

  if (!volunteerForm) {
    console.error(
      `Volunteer Message: Invalid form key: "${formKey}" on page path: "${pagePath}"`,
    );
    return {
      success: false,
      message: 'Invalid form key',
    };
  }

  if (volunteerForm._type !== 'volunteerForm') {
    console.error(
      `Volunteer Message: Invalid form type: "${volunteerForm._type}" for form key "${formKey}" on page path: "${pagePath}"`,
    );
    return {
      success: false,
      message: 'Invalid form type',
    };
  }

  // Email St. Peter's staff with the message from the volunteer
  const destStatus = await transporter.sendMail({
    from: process.env.BRANCH_STUDIO_EMAIL_FROM,
    to: volunteerForm.contactEmail,
    subject: `Volunteer Message: ${volunteerForm.confSubject}`,
    text: buildDestMessage(cleanMessage),
  });

  console.log(
    'Message destination email response: ' +
      sentMessageInfoToString(destStatus),
  );

  // Send a confirmation email to the person that filled in the contact form
  const confStatus = await transporter.sendMail({
    from: process.env.BRANCH_STUDIO_EMAIL_FROM,
    to: message.email,
    subject: volunteerForm.confSubject,
    text: buildConfirmationResponse(volunteerForm.confTemplate, cleanMessage),
  });

  console.log(
    'Message confirmation email response: ' +
      sentMessageInfoToString(confStatus),
  );

  return {
    success: true,
    message: "Your message was successfully sent to St. Peter's Kitchen",
  };
};

function buildDestMessage(message: VolunteerMessage) {
  return trim`Volunteer Message From: ${message.firstName} ${message.lastName}
  ${message.email}${message.phoneNumber ? '\n' + message.phoneNumber : ''}
  group: ${message.group}
  
  ${message.message}`;
}

function buildConfirmationResponse(
  emailTemplate: string,
  message: VolunteerMessage,
) {
  let text = emailTemplate;
  const { firstName, lastName } = message;
  text = text.replace('{{firstName}}', firstName);
  text = text.replace('{{lastName}}', lastName);
  return text;
}
