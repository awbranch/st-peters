import { z } from 'zod';
import { ContactMessageSchema } from '@/schemas/ContactMessageSchema';

export type ContactMessage = z.infer<typeof ContactMessageSchema>;
