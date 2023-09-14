import { createClient, groq } from 'next-sanity';
import { Image, File } from 'sanity';
import imageUrlBuilder from '@sanity/image-url';
import { LunchMenu } from '@/types/LunchMenu';
import { HomePage } from '@/types/HomePage';
import { AboutPage } from '@/types/AboutPage';
import { Program } from '@/types/Program';
import { TeamMember } from '@/types/TeamMember';

export const client = createClient({
  projectId: 't6t8tv0q',
  dataset: 'production',
  apiVersion: '2023-08-28',
  useCdn: false,
});

const builder = imageUrlBuilder(client);

export function urlFor(image: Image) {
  return builder.image(image);
}

export function urlForFile(file: File) {
  const { id, format } = fileAttributes(file);
  const config = client.config();
  return `https://cdn.sanity.io/files/${config.projectId}/${config.dataset}/${id}.${format}`;
}

export function fileAttributes(file: File) {
  const ref = file?.asset?._ref;
  if (!ref) {
    throw new Error(`File should have asset attribute`);
  }
  const [, id, format] = ref.split('-');

  if (!id || !format) {
    throw new Error(`Malformed asset _ref '${ref}'`);
  }

  return { id, format: format };
}

export function imageAttributes(image: Image) {
  const ref = image?.asset?._ref;
  if (!ref) {
    throw new Error(`Image should have asset attribute`);
  }
  const [, id, dimensionString, format] = ref.split('-');

  if (!id || !dimensionString || !format) {
    throw new Error(`Malformed asset _ref '${ref}'`);
  }

  const [imgWidthStr, imgHeightStr] = dimensionString.split('x');

  const width = +imgWidthStr;
  const height = +imgHeightStr;

  const isValidAssetId = isFinite(width) && isFinite(height);
  if (!isValidAssetId) {
    throw new Error(`Malformed asset _ref '${ref}'`);
  }

  return { id, width, height, format };
}

export async function getLunchMenus(): Promise<LunchMenu[]> {
  return client.fetch(groq`*[_type == "lunchMenu"]`);
}

export async function getHomePage(): Promise<HomePage> {
  return client.fetch(groq`*[_type == "homePage"]{
    ...,
    lunchPlan {
      ...,
      "menus": *[_type == "lunchMenu" && dateTime(date + 'T00:00:00Z') > dateTime(now()) - 60*60*24*2]{menu, date} | order(date asc)
    },
    programGrid {
      ...,
      "programs": *[_type == "program"] | order(order asc)
    }
  }[0]`);
}

export async function getProgram(slug: string): Promise<Program> {
  return client.fetch(groq`*[_type == "program" && slug.current == $slug][0]`, {
    slug,
  });
}

export async function getAboutPage(): Promise<AboutPage> {
  return client.fetch(groq`*[_type == "aboutPage"]{
  history,
  map,
  team,
  jobOpenings,
  "documents": dokuments { title, description, "documents": dokuments }
}[0]`);
}

export async function getStaffMembers(): Promise<TeamMember[]> {
  return client.fetch(
    groq`*[_type == "staffMember"] | order(lastName asc, firstName asc)`,
  );
}

export async function getBoardMembers(): Promise<TeamMember[]> {
  return client.fetch(
    groq`*[_type == "boardMember"] | order(lastName asc, firstName asc)`,
  );
}
