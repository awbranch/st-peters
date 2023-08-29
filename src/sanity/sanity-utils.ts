import { createClient, groq } from 'next-sanity';
import { LunchMenu } from '@/types/LunchMenu';
import config from '@/sanity/config/client-config';

export async function getLunchMenus(): Promise<LunchMenu[]> {
  return createClient(config).fetch(groq`*[_type == "lunchMenu"]{
    _id,
    day,
    date,
    items[]
  }`);
}
