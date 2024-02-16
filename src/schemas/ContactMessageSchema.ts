import { z } from 'zod';

export const ContactMessageSchema = z.object({
  subject: z.string({
    errorMap: () => ({ message: 'Subject is required' }),
  }),
  firstName: z.string().trim().min(1, 'First name is required'),
  lastName: z.string().trim().min(1, 'Last name is required'),
  email: z
    .string()
    .trim()
    .min(1, 'Email is required')
    .email({ message: 'Email must be a valid email address' }),
  phoneNumber: z.string().optional(),
  message: z
    .string()
    .min(1, 'Message is required')
    .max(10000, 'Message must be shorter than 10,000 characters'),
});
