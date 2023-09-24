import React from 'react';
import { SubmitButton, TextArea, TextInput } from '@/components/FormControls';

type Props = {};

export default function VolunteerForm({}: Props) {
  return (
    <form>
      <div className={'flex flex-col gap-4 my-4'}>
        <TextInput name={'subject'} title={'Subject'} />
        <TextInput name={'name'} title={'Name'} />
        <TextInput name={'email'} title={'Email'} type={'email'} />
        <TextArea name={'message'} title={'Message'} />
      </div>
      <div className={'text-right'}>
        <SubmitButton />
      </div>
    </form>
  );
}
