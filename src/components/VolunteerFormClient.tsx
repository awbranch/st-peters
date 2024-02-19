'use client';

import React, { Suspense, useEffect } from 'react';
import TextInput from '@/components/TextInput';
import TextArea from '@/components/TextArea';
import { Button } from '@/components/Button';
import { userPaletteButtonProps } from '@/utils/globals';
import { Palette } from '@/types/Palette';
import { FormPlaceholder } from '@/components/FormPlaceholder';
import { toast, Toaster } from 'react-hot-toast';
import { usePathname } from 'next/navigation';
import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { VolunteerMessage } from '@/types/VolunteerMessage';
import { VolunteerMessageSchema } from '@/schemas/VolunteerMessageSchema';
import { errorToString } from '@/utils/utils';
import { sendVolunteerMessage } from '@/actions/sendVolunteerMessage';
import Label from '@/components/Label';
import InputError from '@/components/InputError';
import RadioInput from '@/components/RadioInput';

type Props = {
  formKey: string;
  palette: Palette;
};

export default function VolunteerFormClient(props: Props) {
  return (
    <Suspense fallback={<FormPlaceholder {...props} />}>
      <VolunteerFormImplClient {...props} />
      <Toaster position={'top-right'} />
    </Suspense>
  );
}

const groupSettings = [
  {
    id: 'individual',
    value: 'Individually',
  },
  {
    id: 'group',
    value: 'With a group',
  },
];

//   < input
// id = { notificationMethod.id }
// name = "notification-method"
// type = "radio"
// defaultChecked = { notificationMethod.id === 'email' }
// className = "h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
//   / >
//   < label
// htmlFor = { notificationMethod.id }
// className = "ml-3 block text-sm font-medium leading-6 text-gray-900"
//   >
//   { notificationMethod.title }
// </label>

function VolunteerFormImplClient({ formKey, palette }: Props) {
  const pathname = usePathname();

  const {
    register,
    formState: { errors, isSubmitting, isSubmitSuccessful },
    handleSubmit,
    setError,
    reset,
  } = useForm<VolunteerMessage>({
    resolver: zodResolver(VolunteerMessageSchema),
    defaultValues: {
      group: 'individual',
    },
  });

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
  }, [isSubmitSuccessful, reset]);

  const onSubmit: SubmitHandler<VolunteerMessage> = async (message) => {
    try {
      const result = await sendVolunteerMessage(pathname, formKey, message);
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
          <Label className="block" htmlFor={'group'}>
            Are you coming with a group?
          </Label>
          <fieldset className="mt-4">
            <div className="space-y-4">
              {groupSettings.map((gs) => (
                <div key={gs.id} className="flex items-center">
                  <RadioInput id={gs.id} value={gs.id} {...register('group')} />
                  <Label htmlFor={gs.id} className="ml-3 cursor-pointer block">
                    {gs.value}
                  </Label>
                </div>
              ))}
            </div>
          </fieldset>
          <InputError className={'mt-2'} message={errors.group?.message} />
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

/*
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
        <Button type="submit" {...userPaletteButtonProps[palette].primary}>
          Send message
        </Button>
      </div>
    </form>
 */
