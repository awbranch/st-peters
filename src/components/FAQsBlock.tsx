import React from 'react';
import Block from '@/components/Block';
import RichText from '@/components/RichText';
import { FAQsBlockConfig } from '@/types/FAQsBlockConfig';

export default function FAQsBlock({
  slug,
  background,
  text,
  faqs,
}: FAQsBlockConfig) {
  return (
    <Block slug={slug.current} color={background.label}>
      <RichText text={text} />
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
    </Block>
  );
}
