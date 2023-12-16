import homePage from '@/sanity/schema/home-page-schema';
import aboutPage from '@/sanity/schema/about-page-schema';
import supportPage from '@/sanity/schema/support-page-schema';
import wishlistPage from '@/sanity/schema/wishlist-page-schema';
import settings from '@/sanity/schema/settings-schema';

import docsBlock from '@/sanity/schema/docs-block-schema';
import googleMapBlock from '@/sanity/schema/google-map-block-schema';
import heroBlock from '@/sanity/schema/hero-block-schema';
import highlightBlock from '@/sanity/schema/highlight-block-schema';
import impactBlock from '@/sanity/schema/impact-block-schema';
import instagramBlock from '@/sanity/schema/instagram-block-schema';
import lunchBlock from '@/sanity/schema/lunch-block-schema';
import jobsBlock from '@/sanity/schema/jobs-block-schema';
import programsBlock from '@/sanity/schema/programs-block-schema';
import teamBlock from '@/sanity/schema/team-block-schema';
import textBlock from '@/sanity/schema/text-block-schema';

import action from '@/sanity/schema/action-schema';
import address from '@/sanity/schema/address-schema';
import boardMember from '@/sanity/schema/board-member-schema';
import doc from '@/sanity/schema/doc-schema';
import donationLevel from '@/sanity/schema/donation-level-schema';
import donationRequest from '@/sanity/schema/donation-request-schema';
import faq from '@/sanity/schema/faq-schema';
import impact from '@/sanity/schema/impact-schema';
import job from '@/sanity/schema/job-schema';
import link from '@/sanity/schema/link-schema';
import lunchMenu from '@/sanity/schema/lunch-menu-schema';
import newsStory from '@/sanity/schema/news-story-schema';
import program from '@/sanity/schema/program-schema';
import social from '@/sanity/schema/social-schema';
import staffMember from '@/sanity/schema/staff-member-schema';
import supportCategory from '@/sanity/schema/support-category-schema';
import volunteerPage from '@/sanity/schema/volunteer-page-schema';
import wishlist from '@/sanity/schema/wishlist-schema';

const schemas = [
  homePage,
  aboutPage,
  volunteerPage,
  supportPage,
  wishlistPage,

  docsBlock,
  googleMapBlock,
  heroBlock,
  highlightBlock,
  impactBlock,
  instagramBlock,
  jobsBlock,
  lunchBlock,
  programsBlock,
  teamBlock,
  textBlock,

  action,
  address,
  boardMember,
  doc,
  donationLevel,
  donationRequest,
  faq,
  impact,
  job,
  link,
  lunchMenu,
  newsStory,
  program,
  settings,
  social,
  staffMember,
  supportCategory,
  wishlist,
];

export default schemas;
