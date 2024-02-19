import React, { ForwardedRef, forwardRef, InputHTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';

const RadioInput = forwardRef(function RadioInput(
  { className, ...props }: InputHTMLAttributes<HTMLInputElement>,
  ref: ForwardedRef<HTMLInputElement>,
) {
  return (
    <input
      type={'radio'}
      ref={ref}
      className={twMerge(
        'h-4 w-4 border-gray-300 text-blue-600 focus:ring-blue-600',
        className,
      )}
      {...props}
    />
  );
});

export default RadioInput;
