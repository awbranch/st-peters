import React from 'react';
import { getAboutPage } from '@/sanity/sanity-utils';
import HistoryBlock from '@/components/HistoryBlock';
import GoogleMapBlock from '@/components/GoogleMapBlock';
import TeamBlock from '@/components/TeamBlock';
import JobOpeningsBlock from '@/components/JobOpeningsBlock';
import DocumentsBlock from '@/components/DocumentsBlock';

export default async function AboutUs() {
  const page = await getAboutPage();

  return (
    <main>
      <section id="history">
        <HistoryBlock title={page.title} image={page.image} text={page.text} />
      </section>

      <section id="map">
        <GoogleMapBlock
          title={page.mapTitle}
          text={page.mapText}
          embedURL={page.mapEmbedURL}
        />
      </section>

      <section id="team">
        <TeamBlock
          title={page.teamTitle}
          text={page.teamText}
          staffPhoto={page.staffPhoto}
          staffLabel={page.staffLabel}
          boardPhoto={page.boardPhoto}
          boardLabel={page.boardLabel}
        />
      </section>

      <section id="jobs">
        <JobOpeningsBlock
          title={page.jobsTitle}
          text={page.jobsText}
          postings={page.jobPostings}
          eooText={page.jobsEooText}
          noJobsText={page.noJobsText}
        />
      </section>

      <section id="documents">
        <DocumentsBlock
          title={page.docsTitle}
          text={page.docsText}
          documents={page.docs}
        />
      </section>
    </main>
  );
}
