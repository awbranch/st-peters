import { ComponentProps } from '@/types/Component';
import { Job } from '@/types/Job';
import { Image } from '@/types/Image';

export type JobList = ComponentProps & {
  _type: 'jobList';
  image: Image;
  jobs: Job[];
  eooStatement: string;
  noOpenings: string;
};
