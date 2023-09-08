import HeroBlock from '@/components/HeroBlock';
import LunchPlanBlock from '@/components/LunchPlanBlock';
import { getHomePage } from '@/sanity/sanity-utils';
import HighlightBlock from '@/components/HighlightBlock';

export default async function Home() {
  const data = await getHomePage();

  return (
    <main>
      <HeroBlock color="green" hero={data.hero} />
      <LunchPlanBlock plan={data.lunchPlan} />
      {data.displayHighlight1 && (
        <HighlightBlock
          color="white"
          orientation="right"
          highlight={data.highlight1}
        />
      )}
    </main>
  );
}
