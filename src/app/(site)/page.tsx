import React from 'react';
import { getHomePage } from '@/sanity/sanity-utils';
import HeroBlock from '@/components/HeroBlock';
import LunchBlock from '@/components/LunchBlock';
import HighlightBlock from '@/components/HighlightBlock';
import ImpactBlock from '@/components/ImpactBlock';
import ProgramGridBlock from '@/components/ProgramGridBlock';

export default async function Home() {
  const page = await getHomePage();

  return (
    <>
      <main>
        <section id="hero">
          <HeroBlock color="white" hero={page.hero} />
        </section>
        <section id="lunch-menu">
          <LunchBlock
            title={page.lunchTitle}
            text={page.lunchText}
            tbd={page.lunchTbd}
          />
        </section>
        {page.displayHighlight1 && (
          <section id={page.highlight1.slug.current}>
            <HighlightBlock
              color="white"
              orientation="left"
              highlight={page.highlight1}
            />
          </section>
        )}
        <section id="impact">
          <ImpactBlock
            title={page.impactTitle}
            text={page.impactText}
            impacts={page.impacts}
          />
        </section>

        <section id="programs">
          <ProgramGridBlock
            title={page.programsTitle}
            text={page.programsText}
          />
        </section>

        {page.displayHighlight2 && (
          <section id={page.highlight2.slug.current}>
            <HighlightBlock
              color="white"
              orientation="right"
              highlight={page.highlight2}
            />
          </section>
        )}
      </main>
    </>
  );
}
