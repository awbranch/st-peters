import { BlockProps } from '@/types/Block';
import { Job } from '@/types/Job';
import { Image } from '@/types/Image';

export type JobsBlock = BlockProps & {
  _type: 'jobsBlock';
  title: string;
  text: string;
  image: Image;
  jobs: Job[];
  eooStatement: string;
  noOpenings: string;
};
