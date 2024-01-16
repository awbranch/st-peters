import { BlockProps } from '@/types/Block';
import { Job } from '@/types/Job';
import { Image } from '@/types/Image';
import { PortableTextBlock } from 'sanity';

export type JobsBlock = BlockProps & {
  _type: 'jobsBlock';
  title: string;
  text: PortableTextBlock[];
  image: Image;
  jobs: Job[];
  eooStatement: string;
  noOpenings: string;
};
