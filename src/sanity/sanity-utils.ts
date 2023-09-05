import { createClient, groq } from 'next-sanity';
import { LunchMenu } from '@/types/LunchMenu';
import { Hero } from '@/types/Hero';

export const client = createClient({
  projectId: 't6t8tv0q',
  dataset: 'production',
  apiVersion: '2023-08-28',
  useCdn: false,
});

export async function getLunchMenus(): Promise<LunchMenu[]> {
  return client.fetch(
    groq`*[_type == "lunchMenu"]{
    _id,
    day,
    date,
    items[]
  }`,
  );
}

export async function getHeroes(): Promise<Hero[]> {
  return client.fetch(
    groq`*[_type == "hero"]{
    _id,
    color,
    text,
    image,
    "alt":image.asset->altText
  }`,
  );
}
