import { ComponentProps } from '@/types/Component';
import { Job } from '@/types/Job';

export type JobList = ComponentProps & {
  _type: 'jobList';
  jobs: Job[];
  eooStatement: string;
  noOpenings: string;
};
