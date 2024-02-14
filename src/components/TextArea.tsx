import React, { ForwardedRef, forwardRef, TextareaHTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';

const TextArea = forwardRef(function TextArea(
  { className, ...props }: TextareaHTMLAttributes<HTMLTextAreaElement>,
  ref: ForwardedRef<HTMLTextAreaElement>,
) {
  return (
    <textarea
      ref={ref}
      className={twMerge(
        'rounded-md border-0 px-3.5 py-2 text-sm leading-6 font-medium text-gray-800 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600',
        className,
      )}
      {...props}
    />
  );
});

export default TextArea;
