import HeroBlock from '@/components/HeroBlock';
import LunchPlanBlock from '@/components/LunchPlanBlock';
import { getHomePage } from '@/sanity/sanity-utils';

export default async function Home() {
  const data = await getHomePage();

  return (
    <main>
      <HeroBlock color="green" hero={data.hero} />
      <LunchPlanBlock plan={data.lunchPlan} />
    </main>
  );
}
