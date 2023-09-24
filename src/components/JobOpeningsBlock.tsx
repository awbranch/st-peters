import React from 'react';
import Block from '@/components/Block';
import RichText from '@/components/RichText';
import Card from '@/components/Card';
import LinkButton from '@/components/LinkButton';
import { PortableTextBlock } from 'sanity';
import { JobPosting } from '@/types/JobPosting';

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
        {postings ? (
          <div className="flex flex-row min-h-[400px] justify-around">
            {postings &&
              postings.map((j, i) => (
                <Card
                  key={i}
                  className="text-black w-[300px] flex flex-col justify-between"
                >
                  <div>
                    <h2 className="text-lg">{j.title}</h2>
                    {j.subtitle && (
                      <h3 className="text-sm mt-1">{j.subtitle}</h3>
                    )}
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
        ) : (
          <RichText text={noJobsText} />
        )}
      </div>

      <div className="max-w-screen-md mx-auto mt-4">
        <RichText text={eooText} />
      </div>
    </Block>
  );
}
