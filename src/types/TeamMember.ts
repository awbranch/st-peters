import { Image } from '@/types/Image';

export type TeamMember = {
  firstName: string;
  lastName: string;
  title?: string;
  bio: string;
  image: Image;
  email?: string;
};
