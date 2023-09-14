import { PortableTextBlock } from 'sanity';
import { JobPosting } from '@/types/JobPosting';

export type JobOpenings = {
  title: string;
  description: PortableTextBlock[];
  jobPostings: JobPosting[];
  details?: PortableTextBlock[];
  noOpenings?: PortableTextBlock[];
};
