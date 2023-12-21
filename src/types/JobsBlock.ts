import { BlockProps } from '@/types/Block';
import { PortableTextBlock } from 'sanity';
import { Job } from '@/types/Job';

export type JobsBlock = BlockProps & {
  _type: 'jobsBlock';
  text: PortableTextBlock[];
  jobs: Job[];
  eeoStatement: PortableTextBlock[];
  noOpenings: PortableTextBlock[];
};
