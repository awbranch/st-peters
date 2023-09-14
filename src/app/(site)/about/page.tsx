import { getAboutPage } from '@/sanity/sanity-utils';
import HistoryBlock from '@/components/HistoryBlock';
import GoogleMapBlock from '@/components/GoogleMapBlock';
import TeamBlock from '@/components/TeamBlock';
import JobOpeningsBlock from '@/components/JobOpeningsBlock';
import React from 'react';

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

      <section id="jobs">
        <JobOpeningsBlock jobOpenings={data.jobOpenings} />
      </section>

      <div className="h-24" />
    </main>
  );
}
