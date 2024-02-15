'use client';

import { Palette } from '@/types/Palette';
import Listbox, { ListboxItem } from '@/components/Listbox';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import Label from '@/components/Label';
import { Button } from '@/components/Button';
import { userPaletteButtonProps } from '@/utils/globals';
import TextInput from '@/components/TextInput';
import InputError from '@/components/InputError';
import TextArea from '@/components/TextArea';
import { sendContactMessage } from '@/actions/sendContactMessage';
import { useSearchParams } from 'next/navigation';
import { errorToString } from '@/utils/utils';
import { Para } from '@/components/Typography';
import { twJoin } from 'tailwind-merge';
import { Suspense } from 'react';

type ContactFormClientProps = {
  subjects: ListboxItem[];
  palette: Palette;
};

export default function ContactFormClient({
  subjects,
  palette,
}: ContactFormClientProps) {
  return (
    <Suspense
      fallback={<ContactFormFallback palette={palette} subjects={subjects} />}
    >
      <ContactFormImplClient subjects={subjects} palette={palette} />
    </Suspense>
  );
}

function ContactFormFallback({ palette }: ContactFormClientProps) {
  return (
    <div
      className={twJoin(
        'h-72 flex justify-center items-center rounded-md',
        palette === 'white' && 'bg-gray-100',
        palette === 'highlight' && 'bg-white/10',
        palette === 'gray' && 'bg-white',
        palette === 'black' && 'bg-white/10',
      )}
    >
      <Para>Loading</Para>
    </div>
  );
}

function ContactFormImplClient({ subjects, palette }: ContactFormClientProps) {
  // Find the selected subject
  const searchParams = useSearchParams();

  const {
    register,
    control,
    formState: { errors, isValid, isLoading, isSubmitting },
    handleSubmit,
    setError,
  } = useForm<ContactFormMessage>();

  const selectedSubjectId = subjects.find(
    (s) => s.id === searchParams.get('subject'),
  )?.id;

  const onSubmit: SubmitHandler<ContactFormMessage> = async (message) => {
    try {
      const result = await sendContactMessage(message);
    } catch (e) {
      setError('root.serverError', {
        type: '400',
        message: errorToString(e),
      });
    }

    // if (result?.error) {
    //   toast.error(result.error);
    // } else {
    //   toast.success('Message Sent');
    // }
  };

  const onError = () => {};

  return (
    <div>
      <ul className={'mb-10 font-semibold'}>
        <li>{`isLoading = ${isLoading}`}</li>
        <li>{`isSubmitting = ${isSubmitting}`}</li>
        <li>{`isValid = ${isValid}`}</li>
        {errors?.root?.serverError && (
          <li>{errors.root.serverError.message}</li>
        )}
      </ul>
      <form onSubmit={handleSubmit(onSubmit, onError)} noValidate>
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div className={'sm:col-span-2'}>
            <Label className={'block'} htmlFor={'firstName'}>
              Subject
            </Label>

            <Controller
              control={control}
              name={'subject'}
              rules={{
                required: 'Subject is required',
              }}
              defaultValue={selectedSubjectId}
              render={({ field: { onChange, value } }) => (
                <Listbox
                  className={'mt-2 block w-full'}
                  items={subjects}
                  selectedId={value}
                  setSelectedId={onChange}
                  noneSelectedText={'Select a subject'}
                />
              )}
            />
            <InputError className={'mt-2'} message={errors.subject?.message} />
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
                {...register('firstName', {
                  required: 'First name is required',
                })}
                aria-invalid={errors.firstName ? 'true' : 'false'}
              />
              <InputError
                className={'mt-2'}
                message={errors.firstName?.message}
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
              {...register('lastName', { required: 'Last name is required' })}
              aria-invalid={errors.lastName ? 'true' : 'false'}
            />
            <InputError className={'mt-2'} message={errors.lastName?.message} />
          </div>
          <div className={'sm:col-span-2'}>
            <Label className={'block'} htmlFor={'email'}>
              Your Email *
            </Label>
            <TextInput
              className={'mt-2 block w-full'}
              id={'email'}
              autoComplete={'email'}
              {...register('email', {
                required: 'Email is required',
                pattern: {
                  value: /\S+@\S+\.\S+/,
                  message: 'Must be a valid email',
                },
              })}
              aria-invalid={errors.email ? 'true' : 'false'}
            />
            <InputError className={'mt-2'} message={errors.email?.message} />
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
            <InputError
              className={'mt-2'}
              message={errors.phoneNumber?.message}
            />
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
              {...register('message', {
                required: 'Message is required',
                maxLength: {
                  value: 10000,
                  message: 'Max length is 10,000 characters.',
                },
              })}
              aria-invalid={errors.message ? 'true' : 'false'}
            />
            <InputError className={'mt-2'} message={errors.message?.message} />
          </div>
        </div>
        <div className="mt-8 flex justify-end">
          <Button type="submit" {...userPaletteButtonProps[palette].primary}>
            Send message
          </Button>
        </div>
      </form>
    </div>
  );
}
