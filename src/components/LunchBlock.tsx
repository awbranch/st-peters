import Block from '@/components/Block';
import RichText from '@/components/RichText';
import { getNow, getNextWeekdayDate, isWeekday } from '@/utils/date';
import { getLunchMenus } from '@/sanity/sanity-utils';
import { PortableTextBlock } from 'sanity';
import LunchSlider from '@/components/LunchSlider';

type Props = {
  title: string;
  text: PortableTextBlock[];
  tbd: string;
};

export default async function LunchBlock({ title, text, tbd }: Props) {
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
    <Block color="blue" center>
      <h2 className="text-xl mb-1">{title}</h2>
      <RichText text={text} />
      <div className="mt-4">{menus && <LunchSlider menus={menus} />}</div>
    </Block>
  );
}
