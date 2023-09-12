import { getAboutPage } from '@/sanity/sanity-utils';
import HistoryBlock from '@/components/HistoryBlock';
import GoogleMapBlock from '@/components/GoogleMapBlock';

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
    </main>
  );
}
