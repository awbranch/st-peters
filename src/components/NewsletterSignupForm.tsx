import React from 'react';

type Props = {
  config: string;
};

export default function NewsletterSignupForm({ config }: Props) {
  return (
    <form>
      <label htmlFor={'email'} className={'text-black text-sm sr-only'}>
        Email
      </label>
      <div>
        <div className="relative block xs:inline-block">
          <input
            id={'email'}
            type={'email'}
            placeholder={'email address'}
            className={
              'inline-block w-full xs:inline-block xs:w-[440px] text-black font-normal m-0 px-1.5 py-[8px] text-sm bg-white border-black border-4 rounded-full focus:ring-0'
            }
          />
          <button
            type="submit"
            className="absolute font-bold m-0 px-2 rounded-2xl bg-sunset text-white text-sm top-[6px] bottom-[6px] right-[6px] hover:bg-sunset-dark"
          >
            subscribe
          </button>
        </div>
      </div>
    </form>
  );
}
