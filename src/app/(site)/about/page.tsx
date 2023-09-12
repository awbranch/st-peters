import { getAboutPage } from '@/sanity/sanity-utils';
import HistoryBlock from '@/components/HistoryBlock';
import GoogleMapBlock from '@/components/GoogleMapBlock';
import TeamBlock from '@/components/TeamBlock';

export default async function AboutUs() {
  const data = await getAboutPage();
  return (
    <main>
      <section id="history">
        <HistoryBlock history={data.history} />
      </section>

      <section id="map">
        <GoogleMapBlock googleMap={data.map} />
      </section>

      <section id="team">
        <TeamBlock team={data.team} />
      </section>
    </main>
  );
}
