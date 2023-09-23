import React from 'react';

interface TextInputProps {
  name: string;
  title: string;
  type?: string;
}

const inputClasses =
  'peer w-full py-1 px-1 rounded bg-white text-pink focus:outline-none border-l-4 border-white focus:border-gray-500 placeholder-transparent';

const labelClasses =
  'absolute px-1.5 left-0 -top-2.5 text-white text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-pink-light peer-placeholder-shown:top-1 transition-all peer-focus:-top-2.5 peer-focus:text-white peer-focus:text-sm';

export function TextInput({ name, title, type = 'text' }: TextInputProps) {
  return (
    <div className={'relative mt-3'}>
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

interface TextAreaProps {
  name: string;
  title: string;
  rows?: number;
}

export function TextArea({ name, title, rows = 5 }: TextAreaProps) {
  return (
    <div className={'relative mt-3'}>
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
