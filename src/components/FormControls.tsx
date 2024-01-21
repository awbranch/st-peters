import React from 'react';
import { twMerge } from 'tailwind-merge';

type TextInputProps = {
  id: string;
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
  id,
  name,
  title,
  type = 'text',
  autoComplete,
  className,
}: TextInputProps) {
  return (
    <div className={className}>
      <label htmlFor={id} className={labelClasses}>
        {title}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        autoComplete={autoComplete}
        className={inputClasses}
      />
    </div>
  );
}

type TextAreaProps = {
  id: string;
  name: string;
  title: string;
  rows?: number;
  className?: string;
};

export function TextArea({
  id,
  name,
  title,
  rows = 5,
  className,
}: TextAreaProps) {
  return (
    <div className={className}>
      <label htmlFor={id} className={labelClasses}>
        {title}
      </label>
      <textarea
        id={id}
        name={name}
        rows={rows}
        className={inputClasses}
        defaultValue={''}
      />
    </div>
  );
}

type SelectProps = {
  id: string;
  name: string;
  title: string;
  options: Array<{ name: string; value: string }>;
  className?: string;
};

export function Select({ id, name, title, options, className }: SelectProps) {
  return (
    <div className={className}>
      <label htmlFor={id} className={labelClasses}>
        {title}
      </label>

      <select id={id} name={name} className={inputClasses}>
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
  id: string;
  name: string;
  title: string;
  className?: string;
};

export function RadioButton({ id, name, title, className }: RadioButtonProps) {
  return (
    <div className={twMerge('flex items-center gap-x-3', className)}>
      <input
        id={id}
        name={name}
        className={'h-4 w-4 border-gray-300 text-blue-600 focus:ring-blue-600'}
        type={'radio'}
      />
      <label htmlFor={id} className={labelClasses}>
        {title}
      </label>
    </div>
  );
}
