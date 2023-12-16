import Block from '@/components/Block';
import RichText from '@/components/RichText';
import { getNow, getNextWeekdayDate, isWeekday } from '@/utils/date';
import { getLunchMenus } from '@/sanity/sanity-utils';
import LunchSlider from '@/components/LunchSlider';
import { LunchBlockConfig } from '@/types/LunchBlockConfig';

export default async function LunchBlock({
  slug,
  background,
  title,
  text,
  tbd,
}: LunchBlockConfig) {
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
      menu: tbd,
    });
  }

  return (
    <Block slug={slug.current} color={background.label} center>
      <h2 className="text-5xl font-semibold mb-1">{title}</h2>
      <RichText text={text} />
      <div className="my-4">{menus && <LunchSlider menus={menus} />}</div>
    </Block>
  );
}
