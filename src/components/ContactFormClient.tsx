'use client';

import { Palette } from '@/types/Palette';
import Listbox, { ListboxItem } from '@/components/Listbox';
import { SubmitHandler, useForm } from 'react-hook-form';
import Label from '@/components/Label';
import { Button } from '@/components/Button';
import { userPaletteButtonProps } from '@/utils/globals';
import { useSearchParams } from 'next/navigation';
import { useState } from 'react';
import TextInput from '@/components/TextInput';
import InputError from '@/components/InputError';
import TextArea from '@/components/TextArea';
import { sendContactMessage } from '@/actions/sendContactMessage';

type ContactFormClientProps = {
  subjects: ListboxItem[];
  palette: Palette;
};

const unselectedId = '--undefined--';

export default function ContactFormClient({
  subjects,
  palette,
}: ContactFormClientProps) {
  // Add a default unselected entry to the start of the list
  const subjectsWithDefault = [
    { id: unselectedId, name: '-- Select a subject --' },
    ...subjects,
  ];

  // Find the selected subject
  const searchParams = useSearchParams();
  const [selectedSubjectId, setSelectedSubjectId] = useState<string>(
    (
      subjectsWithDefault.find((s) => s.id === searchParams.get('subject')) ||
      subjectsWithDefault[0]
    ).id,
  );

  const {
    register,
    formState: { errors },
    handleSubmit,
    getValues,
  } = useForm<ContactFormMessage>();

  const onSubmit: SubmitHandler<ContactFormMessage> = async (message) => {
    console.log(message);

    await sendContactMessage(message);
  };

  // async function sendMessage(formData: FormData) {
  //   const contactMessage = {
  //     subject: formData.get('subject'),
  //     firstName: formData.get('firstName'),
  //     lastName: formData.get('lastName'),
  //     email: formData.get('email'),
  //     phoneNumber: formData.get('phoneNumber'),
  //     message: formData.get('message'),
  //   };
  //
  //   const result = contactMessageSchema.safeParse(contactMessage);
  //   if (!result.success) {
  //     // toast.error(result.error.flatten());
  //     return;
  //   }
  //
  //   // const result = await sendContactMessage(formData);
  //
  //   // if (result?.error) {
  //   //   toast.error(result.error);
  //   // } else {
  //   //   toast.success('Message Sent');
  //   // }
  // }
  //
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
        <div className={'sm:col-span-2'}>
          <Label className={'block'} htmlFor={'firstName'}>
            Subject
          </Label>
          <Listbox
            name={'subject'}
            className={'mt-2 block w-full'}
            items={subjectsWithDefault}
            unselectedId={unselectedId}
            selectedId={selectedSubjectId}
            setSelectedId={setSelectedSubjectId}
          />
          <InputError className={'mt-2'} />
        </div>
        <div>
          <div>
            <Label className={'block'} htmlFor={'firstName'}>
              First Name *
            </Label>
            <TextInput
              className={'mt-2 block w-full'}
              id={'firstName'}
              autoComplete={'given-name'}
              {...register('firstName', { required: true })}
              aria-invalid={errors.firstName ? 'true' : 'false'}
            />
            <InputError
              className={'mt-2'}
              message={
                errors.firstName?.type === 'required'
                  ? 'First name is required'
                  : undefined
              }
            />
          </div>
        </div>
        <div>
          <Label className={'block'} htmlFor={'lastName'}>
            Last Name *
          </Label>
          <TextInput
            className={'mt-2 block w-full'}
            id={'lastName'}
            autoComplete={'family-name'}
            {...register('lastName', { required: true })}
            aria-invalid={errors.lastName ? 'true' : 'false'}
          />
          <InputError
            className={'mt-2'}
            message={
              errors.lastName?.type === 'required'
                ? 'Last name is required'
                : undefined
            }
          />
        </div>
        <div className={'sm:col-span-2'}>
          <Label className={'block'} htmlFor={'email'}>
            Email *
          </Label>
          <TextInput
            className={'mt-2 block w-full'}
            id={'email'}
            autoComplete={'email'}
            {...register('email', {
              required: true,
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: 'Must be a valid email',
              },
            })}
            aria-invalid={errors.email ? 'true' : 'false'}
          />
          <InputError
            className={'mt-2'}
            message={
              errors.email?.type === 'required'
                ? 'Email is required'
                : errors.email
                ? errors.email.message
                : undefined
            }
          />
        </div>
        <div className={'sm:col-span-2'}>
          <Label className={'block'} htmlFor={'phoneNumber'}>
            Phone number
          </Label>
          <TextInput
            className={'mt-2 block w-full'}
            id={'phoneNumber'}
            autoComplete={'tel'}
            {...register('phoneNumber')}
          />
          <InputError className={'mt-2'} />
        </div>
        <div className={'sm:col-span-2'}>
          <Label className={'block'} htmlFor={'message'}>
            Message *
          </Label>
          <TextArea
            className={'mt-2 block w-full'}
            id={'message'}
            rows={5}
            defaultValue={''}
            {...register('message', { required: true, maxLength: 10000 })}
            aria-invalid={errors.message ? 'true' : 'false'}
          />
          <InputError
            className={'mt-2'}
            message={
              errors.message?.type === 'required'
                ? 'Message is required'
                : errors.message?.type === 'maxLength'
                ? `Max length is 10,000 characters. Currently ${Number(
                    getValues('message').length,
                  ).toLocaleString()} characters`
                : undefined
            }
          />
        </div>
      </div>
      <div className="mt-8 flex justify-end">
        <Button type="submit" {...userPaletteButtonProps[palette].primary}>
          Send message
        </Button>
      </div>
    </form>
  );
}
