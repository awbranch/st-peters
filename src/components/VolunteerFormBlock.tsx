import React from 'react';
import { RadioButton, TextArea, TextInput } from '@/components/FormControls';
import { Button } from '@/components/Button';
import { VolunteerFormBlock as Props } from '@/types/VolunteerFormBlock';

export default function VolunteerFormBlock({}: Props) {
  return (
    <form>
      <div className={'flex flex-col gap-2 md:gap-4 mb-4'}>
        <TextInput name={'name'} title={'Name'} />
        <div
          className={
            'flex flex-col md:flex-row gap-2 md:gap-4 md:justify-between'
          }
        >
          <TextInput
            name={'email'}
            title={'Email'}
            type={'email'}
            className={'basis-1/2'}
          />
          <TextInput name={'phone'} title={'Phone'} className={'basis-1/2'} />
        </div>
        <TextInput name={'available'} title={'Available dates'} />
        <div>
          <p className={'mb-2'}>Volunteering individually or with a group?</p>
          <div className={'flex flex-col gap-2 sm:flex-row'}>
            <RadioButton
              group={'with'}
              name={'individual'}
              title={'Individually'}
            />
            <RadioButton group={'with'} name={'group'} title={'As a Group'} />
          </div>
        </div>

        <TextArea name={'information'} title={'Additional Information'} />
      </div>
      <div className={'text-right'}>
        <Button>Submit</Button>
      </div>
    </form>
  );
}
