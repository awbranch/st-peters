import React from 'react';
import { FormBlock as Props } from '@/types/FormBlock';
import VolunteerForm from '@/components/VolunteerForm';
import DonateForm from '@/components/DonateForm';
import ContactForm from '@/components/ContactForm';
import { H1 } from '@/components/Typography';
import RichText from '@/components/RichText';

export default function FormBlock({ id, title, text, formType }: Props) {
  return (
    <div id={id?.current}>
      {(title || text) && (
        <div className="mx-auto max-w-4xl text-center mb-12">
          {title && <H1>{title}</H1>}
          {text && <RichText variant={'title'} text={text} />}
        </div>
      )}
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
