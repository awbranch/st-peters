import React from 'react';
import Block from '@/components/Block';
import RichText from '@/components/RichText';
import { PortableTextBlock } from 'sanity';
import { JobPosting } from '@/types/JobPosting';
import JobOpeningsSlider from '@/components/JobOpeningsSlider';

type Props = {
  title: string;
  text: PortableTextBlock[];
  postings: JobPosting[];
  eooText: PortableTextBlock[];
  noJobsText: PortableTextBlock[];
};

export default function JobOpeningsBlock({
  title,
  text,
  postings,
  eooText,
  noJobsText,
}: Props) {
  return (
    <Block color="blue" center>
      <div className="max-w-screen-md mx-auto">
        <h1 className="text-xl mb-3">{title}</h1>
        <RichText text={text} />
      </div>

      <div className="mt-4">
        {postings && postings.length > 0 ? (
          <JobOpeningsSlider postings={postings} />
        ) : (
          <RichText text={noJobsText} />
        )}
      </div>

      <div className="max-w-screen-md mx-auto mt-7">
        <RichText text={eooText} />
      </div>
    </Block>
  );
}
