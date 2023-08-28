import Hero from '@/components/Hero';
import LunchMenu from '@/components/LunchMenu';

export default function Home() {
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
      <LunchMenu />
    </main>
  );
}
