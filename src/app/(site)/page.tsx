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
      <section id="hero">
        <HeroBlock color="green" hero={data.hero} href="#lunch-menu" />
      </section>
      <section id="lunch-menu">
        <LunchPlanBlock plan={data.lunchPlan} />
      </section>
      {data.displayHighlight1 && (
        <section id={data.highlight1.slug.current}>
          <HighlightBlock
            color="white"
            orientation="right"
            highlight={data.highlight1}
          />
        </section>
      )}
      <section id="impact">
        <ImpactBlock statement={data.impact} />
      </section>
      <section id="programs">
        <ProgramGridBlock programGrid={data.programGrid} />
      </section>
      {data.displayHighlight2 && (
        <section id={data.highlight2.slug.current}>
          <HighlightBlock
            color="blue"
            orientation="left"
            highlight={data.highlight2}
          />
        </section>
      )}
    </main>
  );
}
