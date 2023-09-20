import { Image } from '@/types/Image';
import { PortableTextBlock } from 'sanity';
import { JobPosting } from '@/types/JobPosting';
import { Document } from '@/types/Document';

export type AboutPage = {
  title: string;
  image: Image;
  text: PortableTextBlock[];

  mapTitle: string;
  mapText: PortableTextBlock[];
  mapEmbedURL: string;

  teamTitle: string;
  teamText: PortableTextBlock[];
  staffPhoto: Image;
  staffLabel: string;
  boardPhoto: Image;
  boardLabel: string;

  jobsTitle: string;
  jobsText: PortableTextBlock[];
  jobPostings: JobPosting[];
  jobsEooText: PortableTextBlock[];
  noJobsText: PortableTextBlock[];

  docsTitle: string;
  docsText: PortableTextBlock[];
  docs: Document[];
};
