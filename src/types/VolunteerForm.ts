import { ComponentProps } from '@/types/Component';

export type VolunteerForm = ComponentProps & {
  _type: 'volunteerForm';
  contactEmail: string;
  confSubject: string;
  confTemplate: string;
};
