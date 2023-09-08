'use client';
import React, { useState, useEffect } from 'react';
import Block from '@/components/Block';
import Card from '@/components/Card';
import Para from '@/components/Para';
import Image from 'next/image';
import { LunchPlan } from '@/types/LunchPlan';
import RichText from '@/components/RichText';
import {
  getNewYorkNow,
  getWeekday,
  getNextWeekdayDate,
  isWeekday,
  toMonthAndDate,
} from '@/utils/date';

interface Props {
  plan: LunchPlan;
}

const calcMenus = (plan: LunchPlan, today: string) => {
  // Get next three menus from today forward
  const menus = plan.menus.filter((p) => p.date >= today).slice(0, 3);

  // Add on missing dates
  while (menus.length < 3) {
    let nextDate =
      menus.length > 0
        ? getNextWeekdayDate(menus[menus.length - 1].date)
        : isWeekday(today)
        ? today
        : getNextWeekdayDate(today);

    menus.push({
      date: nextDate,
      menu: plan.tbd,
    });
  }
  return menus;
};

export default function LunchPlanBlock({ plan }: Props) {
  const [today, setToday] = useState<string>(null);

  useEffect(() => {
    setToday(getNewYorkNow());
  }, []);

  // Once we know today on the client, we can calculate the upcoming menus from the lunchPlan
  let menus = today ? calcMenus(plan, today) : null;

  return (
    <Block bg="blue" center>
      <h2 className="text-xl uppercase mb-1">{plan.title}</h2>
      <RichText document={plan.text} />
      <div className="mt-4 md:mt-8 flex flex-row justify-between min-h-[400px]">
        {menus &&
          menus.map((m, i) => (
            <Card key={i} className="text-black w-[300px]">
              <h3 className="text-lg mb-1">{getWeekday(m.date)}</h3>
              <Para>{m.date === today ? 'Today' : toMonthAndDate(m.date)}</Para>
              <Image
                src="/heart-pink.svg"
                className="mx-auto mb-3"
                height={40}
                width={40}
                alt="pink heart"
              />
              {m.menu.split(/\n+/).map((mi, i) => (
                <Para key={i}>{mi}</Para>
              ))}
            </Card>
          ))}
      </div>
    </Block>
  );
}
