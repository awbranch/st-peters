import { PortableTextBlock, Slug } from 'sanity';
import { ColorStruct } from '@/types/Color';
import { Job } from '@/types/Job';

export type JobsBlock = {
  _type: 'jobsBlock';
  _key: string;
  slug: Slug;
  background: ColorStruct;
  text: PortableTextBlock[];
  jobs: Job[];
  eeoStatement: PortableTextBlock[];
  noOpenings: PortableTextBlock[];
};
