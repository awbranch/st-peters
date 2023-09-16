import React from 'react';
import Block from '@/components/Block';
import RichText from '@/components/RichText';
import { JobOpenings } from '@/types/JobOpenings';
import Card from '@/components/Card';
import LinkButton from '@/components/LinkButton';

interface Props {
  jobOpenings: JobOpenings;
}

export default function JobOpeningsBlock({ jobOpenings }: Props) {
  return (
    <Block color="blue" center>
      <div className="max-w-screen-md mx-auto">
        <h1 className="text-xl mb-3">{jobOpenings.title}</h1>
        <RichText document={jobOpenings.description} />
      </div>

      <div className="mt-4 flex flex-row min-h-[400px] justify-around">
        {jobOpenings.jobPostings &&
          jobOpenings.jobPostings.map((j, i) => (
            <Card
              key={i}
              className="text-black w-[300px] flex flex-col justify-between"
            >
              <div>
                <h2 className="text-lg">{j.title}</h2>
                {j.subtitle && <h3 className="text-sm mt-1">{j.subtitle}</h3>}
                <p className="mt-3">{j.description}</p>
              </div>
              <LinkButton
                href={j.applyLink}
                className={'mt-3'}
                size={'small'}
                variant={'text'}
                color={'blue'}
                icon={'right'}
              >
                APPLY
              </LinkButton>
            </Card>
          ))}
      </div>

      <div className="max-w-screen-md mx-auto mt-4">
        <RichText document={jobOpenings.details} />
      </div>
    </Block>
  );
}
