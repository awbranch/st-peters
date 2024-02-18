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
import { usePathname, useSearchParams } from 'next/navigation';
import { errorToString } from '@/utils/utils';
import { Suspense, useEffect } from 'react';
import { ContactMessage } from '@/types/ContactMessage';
import { ContactMessageSchema } from '@/schemas/ContactMessageSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import { toast, Toaster } from 'react-hot-toast';
import { twJoin } from 'tailwind-merge';
import { Para } from '@/components/Typography';

type ContactFormClientProps = {
  formKey: string;
  subjects: ListboxItem[];
  palette: Palette;
};

export default function ContactFormClient(props: ContactFormClientProps) {
  return (
    <Suspense fallback={<ContactFormFallback {...props} />}>
      <ContactFormImplClient {...props} />
      <Toaster position={'top-right'} />
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

function ContactFormImplClient({
  formKey,
  subjects,
  palette,
}: ContactFormClientProps) {
  const pathname = usePathname();

  // Find the selected subject
  const searchParams = useSearchParams();

  const {
    register,
    control,
    formState: { errors, isSubmitting, isSubmitSuccessful },
    handleSubmit,
    setError,
    reset,
  } = useForm<ContactMessage>({ resolver: zodResolver(ContactMessageSchema) });

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
  }, [isSubmitSuccessful, reset]);

  const selectedSubjectId = subjects.find(
    (s) => s.id === searchParams.get('subject'),
  )?.id;

  const onSubmit: SubmitHandler<ContactMessage> = async (message) => {
    try {
      const result = await sendContactMessage(pathname, formKey, message);
      if (!result.success) {
        setError('root.serverError', {
          type: '400',
        });
        toast.error(result.message);
      } else {
        toast.success(result.message);
      }
    } catch (e) {
      setError('root.serverError', {
        type: '500',
      });
      toast.error(errorToString(e));
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate>
      <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
        <div className={'sm:col-span-2'}>
          <Label className={'block'} htmlFor={'firstName'}>
            Subject
          </Label>

          <Controller
            control={control}
            name={'subject'}
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
              {...register('firstName')}
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
            {...register('lastName')}
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
            {...register('email')}
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
            {...register('message')}
            aria-invalid={errors.message ? 'true' : 'false'}
          />
          <InputError className={'mt-2'} message={errors.message?.message} />
        </div>
      </div>
      <div className="mt-8 gap-3 flex justify-end">
        <Button
          type="button"
          {...userPaletteButtonProps[palette].secondary}
          disabled={isSubmitting}
          onClick={() => reset()}
        >
          Reset
        </Button>
        <Button
          type="submit"
          {...userPaletteButtonProps[palette].primary}
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Sending...' : 'Send message'}
        </Button>
      </div>
    </form>
  );
}
