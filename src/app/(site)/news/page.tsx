'use client';
import { redirect } from 'next/navigation';
import { newsCategories } from '@/utils/globals';

export default function News() {
  redirect(`/news/${newsCategories[0].slug}`);
}
