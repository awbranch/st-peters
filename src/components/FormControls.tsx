import React from 'react';
import { twMerge } from 'tailwind-merge';

type TextInputProps = {
  name: string;
  title: string;
  type?: string;
  className?: string;
};

const inputClasses =
  'peer w-full py-1 px-1 rounded bg-white text-pink focus:outline-none border-l-4 border-white focus:border-gray-500 placeholder-transparent';

const labelClasses =
  'absolute px-1.5 left-0 -top-2.5 text-white text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-pink-light peer-placeholder-shown:top-1 transition-all peer-focus:-top-2.5 peer-focus:text-white peer-focus:text-sm';

export function TextInput({
  name,
  title,
  type = 'text',
  className,
}: TextInputProps) {
  return (
    <div className={twMerge('relative mt-3', className)}>
      <input
        id={name}
        type={type}
        placeholder={title}
        className={inputClasses}
      />
      <label htmlFor={name} className={labelClasses}>
        {title}
      </label>
    </div>
  );
}

type TextAreaProps = {
  name: string;
  title: string;
  rows?: number;
  className?: string;
};

export function TextArea({ name, title, rows = 5, className }: TextAreaProps) {
  return (
    <div className={twMerge('relative mt-3', className)}>
      <textarea
        id={name}
        placeholder={title}
        className={inputClasses}
        rows={rows}
      />
      <label htmlFor={name} className={labelClasses}>
        {title}
      </label>
    </div>
  );
}

type RadioButtonProps = {
  group: string;
  name: string;
  title: string;
  className?: string;
};

export function RadioButton({
  group,
  name,
  title,
  className,
}: RadioButtonProps) {
  return (
    <div className={twMerge('flex flex-row items-center', className)}>
      <input
        type={'radio'}
        id={name}
        name={group}
        value={name}
        className={'mr-1 accent-pink cursor-pointer'}
      />
      <label
        htmlFor={name}
        className={'text-white text-base cursor-pointer align-middle'}
      >
        {title}
      </label>
    </div>
  );
}

export function SubmitButton() {
  return (
    <button
      id={'submit'}
      name={'submit'}
      type={'submit'}
      className={
        'inline-block bg-white text-pink hover:bg-pink-dark hover:text-white font-bold py-1 px-3 rounded-full focus:outline-gray-500 border-none'
      }
    >
      Submit
    </button>
  );
}
