import HeroBlock from '@/components/HeroBlock';
import LunchPlanBlock from '@/components/LunchPlanBlock';
import { getHomePage } from '@/sanity/sanity-utils';
import HighlightBlock from '@/components/HighlightBlock';
import ImpactBlock from '@/components/ImpactBlock';
import ProgramGridBlock from '@/components/ProgramGridBlock';

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
      <ImpactBlock statement={data.impact} />
      <ProgramGridBlock programGrid={data.programs} />
      {data.displayHighlight2 && (
        <HighlightBlock
          color="blue"
          orientation="left"
          highlight={data.highlight2}
        />
      )}
    </main>
  );
}
