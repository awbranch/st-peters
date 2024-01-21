import React from 'react';
import { Select, TextArea, TextInput } from '@/components/FormControls';
import { Button } from '@/components/Button';
import { ContactFormBlock as Props } from '@/types/ContactFormBlock';

export default function ContactFormBlock({ subjects, background }: Props) {
  return (
    <form>
      <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
        <div className={'sm:col-span-2'}>
          <Select
            name={'subject'}
            title={'Subject'}
            options={
              subjects
                ? subjects.map((s) => ({
                    name: s.name,
                    value: s.name,
                  }))
                : []
            }
          />
        </div>
        <TextInput
          name={'firstName'}
          title={'First Name'}
          autoComplete={'given-name'}
        />
        <TextInput
          name={'lastName'}
          title={'Last Name'}
          autoComplete={'family-name'}
        />
        <div className={'sm:col-span-2'}>
          <TextInput name={'email'} title={'Email'} autoComplete={'email'} />
        </div>
        <div className={'sm:col-span-2'}>
          <TextInput
            name={'phoneNumber'}
            title={'Phone number'}
            autoComplete={'tel'}
          />
        </div>
        <div className={'sm:col-span-2'}>
          <TextArea name={'message'} title={'Message'} />
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
