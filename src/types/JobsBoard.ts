import { PortableTextBlock } from 'sanity';
import { JobPosting } from '@/types/JobPosting';

export type JobsBoard = {
  title: string;
  description: PortableTextBlock[];
  details?: PortableTextBlock[];
  noOpenings?: PortableTextBlock[];
  jobPostings: JobPosting[];
};
