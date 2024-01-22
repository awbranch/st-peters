import React from 'react';
import RichText from '@/components/RichText';
import { ArticleBlock } from '@/types/ArticleBlock';

export default function ArticleBlock({ text }: ArticleBlock) {
  return <RichText text={text} />;
}
