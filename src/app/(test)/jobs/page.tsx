import Section from '@/components/Section';
import { H1, Subtitle } from '@/components/Typography';
import React from 'react';
import LinkButton from '@/components/LinkButton';

const jobOpenings = [
  {
    id: 1,
    role: 'Full-time designer',
    href: '#',
    description:
      'Quos sunt ad dolore ullam qui. Enim et quisquam dicta molestias. Corrupti quo voluptatum eligendi autem labore.',
    salary: '$75,000 USD',
    location: 'San Francisco, CA',
  },
];

export default function Example() {
  return (
    <div className="bg-white">
      <main>
        <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
          <div className="mx-auto flex max-w-2xl flex-col items-end justify-between gap-16 lg:mx-0 lg:max-w-none lg:flex-row">
            <div className="w-full lg:max-w-lg lg:flex-auto">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                We’re always looking for awesome people to join us
              </h2>
              <p className="mt-6 text-xl leading-8 text-gray-600">
                Diam nunc lacus lacus aliquam turpis enim. Eget hac velit est
                euismod lacus. Est non placerat nam arcu. Cras purus nibh cursus
                sit eu in id.
              </p>
              <img
                src="https://images.unsplash.com/photo-1606857521015-7f9fcf423740?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1344&h=1104&q=80"
                alt=""
                className="mt-16 aspect-[6/5] w-full rounded-2xl bg-gray-50 object-cover lg:aspect-auto lg:h-[34.5rem]"
              />
            </div>
            <div className="w-full lg:max-w-xl lg:flex-auto">
              <h3 className="sr-only">Job openings</h3>
              <ul className="-my-8 divide-y divide-gray-100">
                {jobOpenings.map((opening) => (
                  <li key={opening.id} className="py-8">
                    <dl className="relative flex flex-wrap gap-x-3">
                      <dt className="sr-only">Role</dt>
                      <dd className="w-full flex-none text-lg font-semibold tracking-tight text-gray-900">
                        <a href={opening.href}>
                          {opening.role}
                          <span
                            className="absolute inset-0"
                            aria-hidden="true"
                          />
                        </a>
                      </dd>
                      <dt className="sr-only">Description</dt>
                      <dd className="mt-2 w-full flex-none text-base leading-7 text-gray-600">
                        {opening.description}
                      </dd>
                      <dt className="sr-only">Salary</dt>
                      <dd className="mt-4 text-base font-semibold leading-7 text-gray-900">
                        {opening.salary}
                      </dd>
                      <dt className="sr-only">Location</dt>
                      <dd className="mt-4 flex items-center gap-x-3 text-base leading-7 text-gray-500">
                        <svg
                          viewBox="0 0 2 2"
                          className="h-0.5 w-0.5 flex-none fill-gray-300"
                          aria-hidden="true"
                        >
                          <circle cx={1} cy={1} r={1} />
                        </svg>
                        {opening.location}
                      </dd>
                    </dl>
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex border-t border-gray-100 pt-8">
                <a
                  href="#"
                  className="text-sm font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
                >
                  View all openings <span aria-hidden="true">&rarr;</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <Section color={'pink'}>
          <div className={'grid grid-cols-1 lg:grid-cols-2 gap-y-16 gap-x-24'}>
            <div>
              <H1 className={'mt-0'}>Job Openings</H1>
              <Subtitle>
                Advance your career and make a difference in the Rochester
                community by joining the staff at St. Peter’s Kitchen, a dynamic
                organization that provides a suite of services to the community,
                anchored by our daily hot lunch program.
              </Subtitle>
            </div>
            <div className={'row-start-2'}>
              <img
                src="https://cdn.sanity.io/images/t6t8tv0q/production/8e51731a0031eb01d85a5a54628c1b1e7933cc93-480x360.jpg?fit=max&w=500&h=500"
                alt=""
                className="aspect-[4/3] w-full rounded-2xl object-cover"
              />
            </div>
            <div className={'row-start-3 lg:row-start-2 flex items-center'}>
              <ul className="-my-8 divide-y divide-gray-300">
                {jobOpenings.map((opening) => (
                  <li key={opening.id} className="py-8">
                    <dl className="gap-x-3">
                      <dt className="sr-only">Role</dt>
                      <dd className="text-lg font-semibold">Dishwasher</dd>
                      <dt className="sr-only">Job Type</dt>
                      <dd className="text-sm mt-2 opacity-90">Full-Time</dd>
                      <dt className="sr-only">Description</dt>
                      <dd className="mt-2 text-base leading-7 opacity-70">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat.
                      </dd>
                      <dt className="sr-only">Apply</dt>
                      <dd className="text-base mt-6 text-bold">
                        <LinkButton
                          href={'#'}
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
            </div>
          </div>
        </Section>
      </main>
    </div>
  );
}
