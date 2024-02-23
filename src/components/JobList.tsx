import React from 'react';
import { JobList as Props } from '@/types/JobList';
import { LinkButton } from '@/components/Button';
import { userPaletteButtonProps, userPaletteClasses } from '@/utils/globals';
import { splitText } from '@/utils/utils';
import { twJoin } from 'tailwind-merge';

export default function JobList({
  jobs,
  eooStatement,
  noOpenings,
  palette,
}: Props) {
  const visibleJobs = jobs.filter((job) => !job.hidden);

  return (
    <div>
      {visibleJobs.length === 0 ? (
        <div>{noOpenings}</div>
      ) : (
        <ul
          className={twJoin(
            '-my-8 divide-y',
            userPaletteClasses[palette].divide,
          )}
        >
          {visibleJobs.map((job) => (
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
                    size={'large'}
                    icon={'right'}
                    {...userPaletteButtonProps[palette].secondary}
                  >
                    Apply
                  </LinkButton>
                </dd>
              </dl>
            </li>
          ))}
        </ul>
      )}
      <div className={'mt-10'}>
        {splitText(eooStatement).map((s, i) => (
          <p key={i}>{s}</p>
        ))}
      </div>
    </div>
  );
}
