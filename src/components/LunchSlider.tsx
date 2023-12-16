'use client';
import React from 'react';
import Slider from 'react-slick';

import { getNow, getWeekday, toMonthAndDate } from '@/utils/date';
import SimpleText from '@/components/SimpleText';
import { LunchMenu } from '@/types/LunchMenu';
import { breakpoints } from '@/utils/globals';

type Props = {
  menus: LunchMenu[];
};

export default function LunchSlider({ menus }: Props) {
  const today = getNow();
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
        {menus.map((m, i) => (
          <div key={i} className="max-w-[220px] mx-auto h-full">
            <h3 className="text-lg mt-4">{getWeekday(m.date)}</h3>
            <div className={'text-sm mb-2'}>
              {m.date === today ? 'Today' : toMonthAndDate(m.date)}
            </div>
            <div>
              <SimpleText text={m.menu} />
            </div>
          </div>
        ))}
      </Slider>
    </>
  );
}
