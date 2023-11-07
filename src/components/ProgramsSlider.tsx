'use client';
import React from 'react';
import Slider from 'react-slick';

import { Program } from '@/types/Program';
import { ProgramCard } from '@/components/ProgramCard';
import { breakpoints } from '@/utils/globals';

type Props = {
  programs: Program[];
};

export default function ProgramsSlider({ programs }: Props) {
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
        {programs.map((p, i) => (
          <ProgramCard
            key={i}
            href={`/program/${p.slug.current}`}
            title={p.title}
            image={p.introImage}
          />
        ))}
      </Slider>
    </>
  );
}
