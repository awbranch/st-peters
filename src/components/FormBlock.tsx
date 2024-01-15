import React from 'react';
import { FormBlock as Props } from '@/types/FormBlock';
import VolunteerForm from '@/components/VolunteerForm';
import DonateForm from '@/components/DonateForm';
import ContactForm from '@/components/ContactForm';
import BlockTitle from '@/components/BlockTitle';

export default function FormBlock({ title, text, formType }: Props) {
  return (
    <div>
      <BlockTitle title={title} text={text} />
      {formType === 'contact' ? (
        <ContactForm />
      ) : formType === 'donate' ? (
        <DonateForm />
      ) : formType === 'volunteer' ? (
        <VolunteerForm />
      ) : (
        <div className={'bg-blue p-4'}>
          <h1 className={'text-3xl text-center font-semibold'}>
            Unknown Form: {formType}
          </h1>
        </div>
      )}
    </div>
  );
}
