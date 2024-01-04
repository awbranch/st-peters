import React from 'react';
import RichText from '@/components/RichText';
import { FAQsBlock as Props } from '@/types/FAQsBlock';

export default function FAQsBlock({ id, faqs }: Props) {
  return (
    <div id={id?.current}>
      <ul>
        {faqs.map((faq, i) => (
          <li
            key={i}
            className={'list-none w-full border-b border-gray-300 mb-1 pb-1'}
          >
            <input
              type={'radio'}
              name={'accordion'}
              id={`q${i}`}
              className={'hidden peer'}
            />
            <label
              htmlFor={`q${i}`}
              className={
                "flex items-start justify-between py-1 pr-1 text-lg text-black cursor-pointer after:content-['+'] after:text-[1.3em] peer-checked:text-ocean hover:text-ocean peer-checked:after:content-['-']"
              }
            >
              {faq.question}
            </label>
            <div className={'max-h-0 overflow-hidden peer-checked:max-h-fit'}>
              <RichText text={faq.answer}></RichText>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
