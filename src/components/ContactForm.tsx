import React from 'react';
import { SubmitButton, TextArea, TextInput } from '@/components/FormControls';

type Props = {};

export default function ContactForm({}: Props) {
  return (
    <form>
      <div className={'flex flex-col gap-4 my-4'}>
        <TextInput name={'subject'} title={'Subject'} />
        <div className={'flex flex-row gap-4 justify-between'}>
          <div className={'basis-1/2'}>
            <TextInput name={'name'} title={'Name'} />
          </div>
          <div className={'basis-1/2'}>
            <TextInput name={'email'} title={'Email'} type={'email'} />
          </div>
        </div>
        <TextArea name={'message'} title={'Message'} />
      </div>
      <div className={'text-right'}>
        <SubmitButton />
      </div>
    </form>
  );
}
