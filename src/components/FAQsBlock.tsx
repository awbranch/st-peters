import React from 'react';
import Block from '@/components/Block';
import { FAQ } from '@/types/FAQ';
import RichText from '@/components/RichText';

type Props = {
  title: string;
  faqs: FAQ[];
};

export default function FAQsBlock({ title, faqs }: Props) {
  return (
    <Block>
      <h1 className="text-xl uppercase mb-3">{title}</h1>
      <ul className={'disc'}>
        {faqs.map((faq, i) => (
          <li key={i}>
            <h2 className="text-lg mb-1">{faq.question}</h2>
            <RichText text={faq.answer}></RichText>
          </li>
        ))}
      </ul>
    </Block>
  );
}
