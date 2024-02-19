import nodemailer from 'nodemailer';
import { SentMessageInfo } from 'nodemailer/lib/smtp-transport';

export const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.BRANCH_STUDIO_SMTP_USER,
    pass: process.env.BRANCH_STUDIO_SMTP_PASS,
  },
  logger: true,
  debug: true,
});

export function sentMessageInfoToString(status: SentMessageInfo): string {
  return `${status.response} id: ${status.messageId} accepted: ${JSON.stringify(
    status.accepted,
  )} rejected: ${JSON.stringify(status.rejected)}`;
}
