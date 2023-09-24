import { getVolunteerPage } from '@/sanity/sanity-utils';
import HeroBlock from '@/components/HeroBlock';
import RichText from '@/components/RichText';
import Block from '@/components/Block';
import FAQsBlock from '@/components/FAQsBlock';
import VolunteerFormBlock from '@/components/VolunteerFormBlock';
import Header from '@/components/Header';
import React from 'react';

export default async function Volunteer() {
  const page = await getVolunteerPage();

  return (
    <>
      <Header color={'blue'} currentMenu={'volunteer'} />
      <main>
        <section id="hero">
          <HeroBlock color="blue" hero={page.hero} href="#details" />
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
          <VolunteerFormBlock
            title={page.formTitle}
            text={page.formText}
            image={page.formImage}
          />
        </section>
      </main>
    </>
  );
}
