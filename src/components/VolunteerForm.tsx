import React from 'react';
import {
  RadioButton,
  SubmitButton,
  TextArea,
  TextInput,
} from '@/components/FormControls';

type Props = {};

export default function VolunteerForm({}: Props) {
  return (
    <form>
      <div className={'flex flex-col gap-4 my-4'}>
        <TextInput name={'name'} title={'Name'} />
        <div className={'flex flex-row gap-4 justify-between'}>
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
          <div className={'flex flex-row gap-4'}>
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
        <SubmitButton />
      </div>
    </form>
  );
}
