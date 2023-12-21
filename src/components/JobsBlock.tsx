import React from 'react';
import Block from '@/components/Block';
import RichText from '@/components/RichText';
import JobsSlider from '@/components/JobsSlider';
import { JobsBlock as Props } from '@/types/JobsBlock';

export default function JobsBlock({
  slug,
  background,
  narrow,
  text,
  jobs,
  eeoStatement,
  noOpenings,
}: Props) {
  return (
    <Block slug={slug.current} color={background?.label} center narrow={narrow}>
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
    </Block>
  );
}
