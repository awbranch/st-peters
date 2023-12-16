import { getVolunteerPage } from '@/sanity/sanity-utils';
import HeroBlock from '@/components/HeroBlock';
import RichText from '@/components/RichText';
import Block from '@/components/Block';
import FAQsBlock from '@/components/FAQsBlock';
import VolunteerFormBlock from '@/components/VolunteerFormBlock';
import React from 'react';

export default async function Volunteer() {
  const page = await getVolunteerPage();

  return (
    <>
      <main>
        <section id="hero">
          <HeroBlock {...page.hero} />
        </section>
        <section id="details">
          <Block>
            <RichText text={page.details} />
          </Block>
        </section>
        <section id="faqs">
          <FAQsBlock title={page.faqsTitle} faqs={page.faqs} />
        </section>
        <section id="signup-form">
          <VolunteerFormBlock title={page.formTitle} text={page.formText} />
        </section>
      </main>
    </>
  );
}
