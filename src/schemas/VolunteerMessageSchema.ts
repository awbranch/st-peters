import { z } from 'zod';

export const VolunteerMessageSchema = z.object({
  firstName: z.string().trim().min(1, 'First name is required'),
  lastName: z.string().trim().min(1, 'Last name is required'),
  email: z
    .string()
    .trim()
    .min(1, 'Email is required')
    .email({ message: 'Email must be a valid email address' }),
  phoneNumber: z.string().optional(),
  group: z.enum(['individual', 'group'], {
    errorMap: () => ({ message: 'Please select a group' }),
  }),
  message: z
    .string()
    .min(1, 'Message is required')
    .max(10000, 'Message must be shorter than 10,000 characters'),
});
