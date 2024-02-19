import { z } from 'zod';
import { VolunteerMessageSchema } from '@/schemas/VolunteerMessageSchema';

export type VolunteerMessage = z.infer<typeof VolunteerMessageSchema>;
