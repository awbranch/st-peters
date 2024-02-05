import React from 'react';
import { RadioButton, TextArea, TextInput } from '@/components/FormControls';
import { Button } from '@/components/Button';
import { VolunteerForm as Props } from '@/types/VolunteerForm';

export default function VolunteerForm({ background }: Props) {
  return (
    <form>
      <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
        <TextInput
          id={'firstName'}
          name={'firstName'}
          title={'First Name'}
          autoComplete={'given-name'}
        />
        <TextInput
          id={'lastName'}
          name={'lastName'}
          title={'Last Name'}
          autoComplete={'family-name'}
        />
        <div className={'sm:col-span-2'}>
          <TextInput
            id={'email'}
            name={'email'}
            title={'Email'}
            autoComplete={'email'}
          />
        </div>
        <div className={'sm:col-span-2'}>
          <TextInput
            id={'phoneNumber'}
            name={'phoneNumber'}
            title={'Phone number'}
            autoComplete={'tel'}
          />
        </div>
        <div className={'sm:col-span-2'}>
          <fieldset className={'my-6'}>
            <legend className="text-sm font-semibold leading-6">
              Are you coming with a group?
            </legend>
            <div className="mt-6 flex flex-col sm:flex-row gap-x-10 gap-y-3 ">
              <RadioButton
                id={'group-no'}
                name={'group'}
                title={'Individually'}
              />
              <RadioButton
                id={'group-yes'}
                name={'group'}
                title={'With a group'}
              />
            </div>
          </fieldset>
        </div>
        <div className={'sm:col-span-2'}>
          <TextArea
            id={'message'}
            name={'message'}
            title={'Additional Information'}
          />
        </div>
      </div>
      <div className="mt-8 flex justify-end">
        <Button type="submit" variant={'outline'} color={background?.label}>
          Send message
        </Button>
      </div>
    </form>
  );
}

/*
  return (
    <form>
      <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
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
      <div className="mt-8 flex justify-end">
        <Button type="submit" variant={'outline'} color={'pink'}>
          Send message
        </Button>
      </div>
    </form>
  );

 */
