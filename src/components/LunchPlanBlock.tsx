import Block from '@/components/Block';
import Card from '@/components/Card';
import Para from '@/components/Para';
import Image from 'next/image';
import { LunchPlan } from '@/types/LunchPlan';
import RichText from '@/components/RichText';
import {
  getNow,
  getWeekday,
  getNextWeekdayDate,
  isWeekday,
  toMonthAndDate,
} from '@/utils/date';
import SimpleText from '@/components/SimpleText';
import { getLunchMenus } from '@/sanity/sanity-utils';

interface Props {
  plan: LunchPlan;
}

export default async function LunchPlanBlock({ plan }: Props) {
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
      date: nextDate,
      menu: plan.tbd,
    });
  }

  return (
    <Block color="blue" center>
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
              <SimpleText text={m.menu} />
            </Card>
          ))}
      </div>
    </Block>
  );
}
