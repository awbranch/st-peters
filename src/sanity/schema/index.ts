import settings from '@/sanity/schema/settings-schema';
import homePage from '@/sanity/schema/home-page-schema';

import lunchPlan from '@/sanity/schema/lunch-plan-schema';
import lunchMenu from '@/sanity/schema/lunch-menu-schema';
import hero from '@/sanity/schema/hero-schema';
import address from '@/sanity/schema/address-schema';
import social from '@/sanity/schema/social-schema';
import link from '@/sanity/schema/link-schema';
import impactStatement from '@/sanity/schema/impact-statement-schema';
import impact from '@/sanity/schema/impact-schema';

const schemas = [
  settings,
  lunchMenu,
  homePage,
  hero,
  lunchPlan,
  address,
  social,
  link,
  impactStatement,
  impact,
];

export default schemas;
