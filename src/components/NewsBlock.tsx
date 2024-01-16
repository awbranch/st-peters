'use client';

import React, { Fragment } from 'react';
import { Menu, Popover, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import Section from '@/components/Section';
import { NewsStory } from '@/types/NewsStory';
import { twJoin } from 'tailwind-merge';
import ResponsiveImage from '@/components/ResponsiveImage';
import { toShortDate } from '@/utils/date';

const sortOptions = [
  { name: 'Newest', href: '#' },
  { name: 'Oldest', href: '#' },
];

const categories = [
  { value: 'any', label: 'Any', selected: true },
  { value: 'event', label: 'Event', selected: false },
  { value: 'community-story', label: 'Community Story', selected: false },
  { value: 'upcoming', label: 'Upcoming', selected: false },
];

const menuTransitionProps = {
  enter: 'transition ease-out duration-100',
  enterFrom: 'transform opacity-0 scale-95',
  enterTo: 'transform opacity-100 scale-100',
  leave: 'transition ease-in duration-75',
  leaveFrom: 'transform opacity-100 scale-100',
  leaveTo: 'transform opacity-0 scale-95',
};

type Props = {
  stories: NewsStory[];
};

export default function News({ stories }: Props) {
  return (
    <Section maxWidth="md">
      <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
        News
      </h2>

      <div
        aria-labelledby="filter-heading"
        className="border-b border-gray-200 pt-4 pb-2"
      >
        <div className="flex justify-end gap-x-6">
          <Menu as="div" className="relative inline-block">
            <div>
              <Menu.Button className="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900">
                Sort
                <ChevronDownIcon
                  className="-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                  aria-hidden="true"
                />
              </Menu.Button>
            </div>

            <Transition as={Fragment} {...menuTransitionProps}>
              <Menu.Items className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div className="py-1">
                  {sortOptions.map((option) => (
                    <Menu.Item key={option.name}>
                      {({ active }) => (
                        <a
                          href={option.href}
                          className={twJoin(
                            active ? 'bg-gray-100' : '',
                            'block px-4 py-2 text-sm font-medium text-gray-900',
                          )}
                        >
                          {option.name}
                        </a>
                      )}
                    </Menu.Item>
                  ))}
                </div>
              </Menu.Items>
            </Transition>
          </Menu>
          <Popover.Group className="flex sm:items-baseline sm:space-x-8">
            <Popover
              as="div"
              id={`desktop-menu-category`}
              className="relative inline-block text-left"
            >
              <div>
                <Popover.Button className="group inline-flex items-center justify-center text-sm font-medium text-gray-700 hover:text-gray-900">
                  <span>Category</span>
                  <ChevronDownIcon
                    className="-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                    aria-hidden="true"
                  />
                </Popover.Button>
              </div>

              <Transition as={Fragment} {...menuTransitionProps}>
                <Popover.Panel className="absolute right-0 z-10 mt-2 origin-top-right rounded-md bg-white p-4 shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <form className="space-y-4">
                    {categories.map((category, optionIdx) => (
                      <div key={category.value} className="flex items-center">
                        <input
                          id={`filter-category-${optionIdx}`}
                          name={`${category}[]`}
                          defaultValue={category.value}
                          checked={category.selected}
                          type="checkbox"
                          className="h-4 w-4 rounded border-gray-300 text-sunset focus:ring-sunset-light"
                        />
                        <label
                          htmlFor={`filter-category-${optionIdx}`}
                          className="ml-3 whitespace-nowrap pr-6 text-sm font-medium text-gray-900 w-full"
                        >
                          {category.label}
                        </label>
                      </div>
                    ))}
                  </form>
                </Popover.Panel>
              </Transition>
            </Popover>
          </Popover.Group>
        </div>
      </div>

      <div className="mt-16 space-y-20 lg:space-y-20">
        {stories.map((story) => (
          <article
            key={story.slug.current}
            className="relative isolate flex flex-col gap-8 lg:flex-row"
          >
            <div className="relative aspect-[16/9] sm:aspect-[2/1] lg:aspect-square lg:w-64 lg:shrink-0">
              <ResponsiveImage
                image={story.image}
                className="absolute inset-0 h-full w-full rounded-2xl bg-gray-50 object-cover"
                sizes={'100vw'}
              />
              {/*<div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />*/}
            </div>
            <div>
              <div className="flex items-center gap-x-4 text-xs">
                <time dateTime={story.date} className="text-gray-500">
                  {toShortDate(story.date)}
                </time>
                <a
                  href={'#'}
                  className="relative z-10 rounded-full bg-gray-100 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-200"
                >
                  {categories.find((c) => c.value === story.category)?.label}
                </a>
              </div>
              <div className="group relative max-w-xl">
                <h3 className="mt-3 text-xl font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                  <a href={`/news/story/${story.slug.current}`}>
                    <span className="absolute inset-0" />
                    {story.title}
                  </a>
                </h3>
                <p className="mt-5 text-base leading-relaxed text-gray-600">
                  {story.description}
                </p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}