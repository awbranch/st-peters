import React from 'react';
import Block from '@/components/Block';
import { getSettings } from '@/sanity/sanity-utils';
import RichText from '@/components/RichText';
import ContactForm from '@/components/ContactForm';
import NarrowContainer from '@/components/NarrowContainer';

export default async function Contact() {
  const settings = await getSettings();
  return (
    <>
      <main>
        <Block color={'pink'}>
          <NarrowContainer>
            <h1 className="text-xl mb-4">{settings.contactUsTitle}</h1>
            <RichText text={settings.contactUsText} />
            <ContactForm />
          </NarrowContainer>
        </Block>
      </main>
    </>
  );
}
