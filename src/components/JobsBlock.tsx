import React from 'react';
import RichText from '@/components/RichText';
import JobsSlider from '@/components/JobsSlider';
import { JobsBlock as Props } from '@/types/JobsBlock';

export default function JobsBlock({
  id,
  text,
  jobs,
  eeoStatement,
  noOpenings,
}: Props) {
  return (
    <div id={id?.current} className="text-center">
      <div className="max-w-screen-md mx-auto">
        <RichText text={text} />
      </div>

      <div className="mt-4">
        {jobs && jobs.length > 0 ? (
          <JobsSlider jobs={jobs} />
        ) : (
          <RichText text={noOpenings} />
        )}
      </div>

      <div className="max-w-screen-md mx-auto mt-7">
        <RichText text={eeoStatement} />
      </div>
    </div>
  );
}
