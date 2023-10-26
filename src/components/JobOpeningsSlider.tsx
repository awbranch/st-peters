'use client';
import React from 'react';
import Slider from 'react-slick';

import Card from '@/components/Card';
import LinkButton from '@/components/LinkButton';
import { JobPosting } from '@/types/JobPosting';
import { breakpoints } from '@/utils/globals';

type Props = {
  postings: JobPosting[];
};

export default function JobOpeningsSlider({ postings }: Props) {
  return (
    <>
      <Slider
        className={'mt-5 mb-5 md:mb-0 mx-4 md:mx-2 lg:mx-0'}
        dots={true}
        infinite={false}
        speed={500}
        slidesToScroll={1}
        slidesToShow={3}
        responsive={[
          {
            breakpoint: breakpoints.lg,
            settings: {
              slidesToShow: 2,
            },
          },
          {
            breakpoint: breakpoints.md,
            settings: {
              slidesToShow: 1,
            },
          },
        ]}
      >
        {postings.map((j, i) => (
          <Card
            key={i}
            className="text-black rounded w-[230px] max-w-[230px] xs:w-[300px] xs:max-w-[300px] mx-auto h-full"
          >
            <h2 className="text-lg">{j.title}</h2>
            {j.subtitle && <h3 className="text-sm mt-1">{j.subtitle}</h3>}
            <p className="mt-3">{j.description}</p>
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
      </Slider>
    </>
  );
}
