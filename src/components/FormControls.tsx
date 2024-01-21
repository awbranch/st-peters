import React from 'react';
import { twMerge } from 'tailwind-merge';

type TextInputProps = {
  name: string;
  title: string;
  type?: string;
  autoComplete?: string;
  className?: string;
};

const labelClasses = 'block text-sm font-semibold leading-6';
const inputClasses =
  'mt-2 block w-full rounded-md border-0 px-3.5 py-2 text-sm leading-6 font-medium text-gray-800 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600';

export function TextInput({
  name,
  title,
  type = 'text',
  autoComplete,
  className,
}: TextInputProps) {
  return (
    <div className={className}>
      <label htmlFor={name} className={labelClasses}>
        {title}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        autoComplete={autoComplete}
        className={inputClasses}
      />
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
    <div className={className}>
      <label htmlFor={name} className={labelClasses}>
        {title}
      </label>
      <textarea
        id={name}
        name={name}
        rows={rows}
        className={inputClasses}
        defaultValue={''}
      />
    </div>
  );
}

type SelectProps = {
  name: string;
  title: string;
  options: Array<{ name: string; value: string }>;
  className?: string;
};

export function Select({ name, title, options, className }: SelectProps) {
  return (
    <div className={className}>
      <label htmlFor={name} className={labelClasses}>
        {title}
      </label>

      <select id={name} name={name} className={inputClasses}>
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.name}
          </option>
        ))}
      </select>
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
        className={
          'w-[15px] h-[15px] mr-1 text-black focus:ring-gray-300 cursor-pointer'
        }
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
