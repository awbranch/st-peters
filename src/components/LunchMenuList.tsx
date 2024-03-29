import {
  getNextWeekdayDate,
  getNow,
  getWeekday,
  isWeekday,
  toMonthAndDate,
} from '@/utils/date';
import { getLunchMenus } from '@/utils/sanity';
import { LunchMenuList as Props } from '@/types/LunchMenuList';
import { twJoin } from 'tailwind-merge';
import SimpleText from '@/components/SimpleText';
import React from 'react';

export default async function LunchMenuList({ tbd, palette }: Props) {
  const menus = await getLunchMenus();

  // Fill in any missing dates
  const today = getNow();
  while (menus.length < 3) {
    let nextDate =
      menus.length > 0
        ? getNextWeekdayDate(menus[menus.length - 1].date)
        : isWeekday(today)
        ? today
        : getNextWeekdayDate(today);

    menus.push({
      _key: nextDate,
      date: nextDate,
      menu: tbd,
    });
  }

  return (
    <div className="mx-auto grid max-w-md grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
      {menus.map((menu) => (
        <div
          key={menu._key}
          className={twJoin(
            menu.date === today
              ? twJoin(
                  'ring-2',
                  palette === 'white' && 'bg-white ring-sunset',
                  palette === 'highlight' && 'bg-white bg-opacity-5 ring-white',
                  palette === 'gray' && 'bg-white ring-sunset',
                  palette === 'black' && 'bg-white bg-opacity-5 ring-sunset',
                )
              : twJoin(
                  palette === 'white' && 'ring-1 ring-black/10',
                  palette === 'highlight' && 'ring-1 ring-white/20',
                  palette === 'gray' && 'bg-gray-50 ring-1 ring-black/30',
                  palette === 'black' && 'ring-1 ring-white/10',
                ),
            'rounded-3xl p-8 xl:p-10',
          )}
        >
          <div className="flex items-center justify-between gap-x-4">
            <h2 id={menu.date} className="text-lg font-semibold leading-8">
              {menu.date === today ? 'Today' : toMonthAndDate(menu.date)}
            </h2>
          </div>
          <p className="mt-2 flex items-baseline gap-x-1">
            <span className="text-4xl font-bold tracking-tight">
              {getWeekday(menu.date)}
            </span>
          </p>
          <div className="mt-6 space-y-3 text-sm leading-6 xl:mt-8 lg:min-h-[200px] opacity-70">
            <SimpleText text={menu.menu} />
          </div>
        </div>
      ))}
    </div>
  );
}
