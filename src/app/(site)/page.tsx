import LunchMenuBlock from '@/components/LunchMenuBlock';
import HeroBlock from '@/components/HeroBlock';
import { getHeroes } from '@/sanity/sanity-utils';

export default async function Home() {
  const heroes = await getHeroes();

  return (
    <main>
      {heroes.map((h) => (
        <HeroBlock key={h._id} hero={h} />
      ))}
      <LunchMenuBlock />
    </main>
  );
}
