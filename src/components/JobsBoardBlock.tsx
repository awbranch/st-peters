import React from 'react';
import Block from '@/components/Block';
import RichText from '@/components/RichText';
import { JobsBoard } from '@/types/JobsBoard';
import Card from '@/components/Card';
import Button from '@/components/Button';

interface Props {
  jobsBoard: JobsBoard;
}

export default function JobsBoardBlock({ jobsBoard }: Props) {
  return (
    <Block color="blue" center>
      <div className="max-w-screen-md mx-auto">
        <h1 className="text-xl mb-3">{jobsBoard.title}</h1>
        <RichText document={jobsBoard.description} />
      </div>

      <div className="mt-4 flex flex-row min-h-[400px] justify-around">
        {jobsBoard.jobPostings &&
          jobsBoard.jobPostings.map((j, i) => (
            <Card
              key={i}
              className="text-black w-[300px] flex flex-col justify-between"
            >
              <div>
                <h2 className="text-lg">{j.title}</h2>
                {j.subtitle && <h3 className="text-sm mt-1">{j.subtitle}</h3>}
                <p className="mt-3">{j.description}</p>
              </div>
              <Button
                size={'small'}
                variant={'text'}
                color={'blue'}
                icon={'right'}
              >
                APPLY
              </Button>
            </Card>
          ))}
      </div>

      <div className="max-w-screen-md mx-auto mt-4">
        <RichText document={jobsBoard.details} />
      </div>
    </Block>
  );
}
