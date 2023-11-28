'use client';
import React from 'react';
import Slider from 'react-slick';

import { getNow, getWeekday, toMonthAndDate } from '@/utils/date';
import SimpleText from '@/components/SimpleText';
import { LunchMenu } from '@/types/LunchMenu';
import Card from '@/components/Card';
import Para from '@/components/Para';
import { breakpoints } from '@/utils/globals';
import { FaHeart } from 'react-icons/fa6';

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
          <Card
            key={i}
            className="text-black rounded w-[230px] max-w-[230px] xs:w-[300px] xs:max-w-[300px] mx-auto h-full"
          >
            <h3 className="text-lg mb-1">{getWeekday(m.date)}</h3>
            <Para>{m.date === today ? 'Today' : toMonthAndDate(m.date)}</Para>
            <FaHeart className="inline-block text-sunset w-[36px] h-[36px] mb-3" />
            <SimpleText text={m.menu} />
          </Card>
        ))}
      </Slider>
    </>
  );
}
