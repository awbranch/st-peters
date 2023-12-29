import React from 'react';
import Block from '@/components/Block';
import RichText from '@/components/RichText';
import { FormBlock as Props } from '@/types/FormBlock';
import VolunteerForm from '@/components/VolunteerForm';
import DonateForm from '@/components/DonateForm';
import ContactForm from '@/components/ContactForm';

export default function FormBlock({
  slug,
  background,
  narrow,
  text,
  formType,
}: Props) {
  return (
    <Block slug={slug.current} color={background?.label} narrow={narrow}>
      <RichText text={text} />
      {formType === 'contact' ? (
        <ContactForm />
      ) : formType === 'donate' ? (
        <DonateForm />
      ) : formType === 'volunteer' ? (
        <VolunteerForm />
      ) : (
        <Block color={'blue'}>
          <h1 className={'text-3xl text-center font-semibold'}>
            Unknown Form: {formType}
          </h1>
        </Block>
      )}
    </Block>
  );
}
