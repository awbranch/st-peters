import React from 'react';
import RichText from '@/components/RichText';
import { Article as ArticleType } from '@/types/Article';

export default function Article({ text, palette }: ArticleType) {
  return <RichText text={text} palette={palette} />;
}
