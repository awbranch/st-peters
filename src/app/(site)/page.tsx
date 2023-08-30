import Hero from '@/components/Hero';
import LunchMenuBlock from '@/components/LunchMenuBlock';
import RevalidateBlock from '@/components/RevalidateBlock';

export default async function Home() {
  return (
    <main>
      <Hero
        bg="green"
        header="Welcoming Everyone with Love"
        text="At St. Peter’s Kitchen we are working to build a stronger community that welcomes all in need while attempting to eradicate hunger in downtown Rochester, NY. "
        btnLabel="Learn More"
        btnHref=""
        image=""
      />
      <LunchMenuBlock />
      <RevalidateBlock />
    </main>
  );
}
