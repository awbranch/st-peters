import React from 'react';
import { JobList as Props } from '@/types/JobList';
import { LinkButton } from '@/components/Button';
import ResponsiveImage from '@/components/ResponsiveImage';
import { splitText } from '@/utils/text';

export default function JobList({
  jobs,
  image,
  eooStatement,
  noOpenings,
}: Props) {
  return (
    <div
      className={
        'mx-auto grid grid-cols-1 lg:grid-cols-2 gap-y-8 gap-x-24 max-w-lg lg:max-w-full'
      }
    >
      <div className={'row-start-2'}>
        <ResponsiveImage
          image={image}
          sizes={'100vw'}
          className="aspect-[4/3]  max-w-lg rounded-2xl"
        />
      </div>
      <div className={'row-start-3 lg:row-start-2 flex items-center'}>
        {jobs?.length > 0 ? (
          <ul className="-my-8 divide-y divide-gray-300">
            {jobs.map((job) => (
              <li key={job._key} className="py-8">
                <dl className="gap-x-3">
                  <dt className="sr-only">Role</dt>
                  <dd className="text-lg font-semibold">{job.title}</dd>
                  <dt className="sr-only">Job Type</dt>
                  <dd className="text-sm mt-2 opacity-90">{job.subtitle}</dd>
                  <dt className="sr-only">Description</dt>
                  <dd className="mt-2 text-base leading-7 opacity-70">
                    {job.description}
                  </dd>
                  <dt className="sr-only">Apply</dt>
                  <dd className="text-base mt-6 text-bold">
                    <LinkButton
                      href={job.applyLink}
                      color={'white'}
                      variant={'outline'}
                      size={'small'}
                      icon={'right'}
                    >
                      Apply
                    </LinkButton>
                  </dd>
                </dl>
              </li>
            ))}
          </ul>
        ) : (
          <div>{noOpenings}</div>
        )}
      </div>
      <div className={'row-start-4 lg:row-start-3 space-y-4'}>
        {splitText(eooStatement).map((s, i) => (
          <p key={i} className={'text-sm opacity-70'}>
            {s}
          </p>
        ))}
      </div>
    </div>
  );
}
