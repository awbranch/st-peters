import homePage from '@/sanity/schema/home-page-schema';
import aboutPage from '@/sanity/schema/about-page-schema';
import supportPage from '@/sanity/schema/support-page-schema';
import wishlistPage from '@/sanity/schema/wishlist-page-schema';
import settings from '@/sanity/schema/settings-schema';

import programsBlock from '@/sanity/schema/programs-block-schema';
import program from '@/sanity/schema/program-schema';
import lunchBlock from '@/sanity/schema/lunch-block-schema';
import lunchMenu from '@/sanity/schema/lunch-menu-schema';
import heroBlock from '@/sanity/schema/hero-block-schema';
import highlightBlock from '@/sanity/schema/highlight-block-schema';
import address from '@/sanity/schema/address-schema';
import social from '@/sanity/schema/social-schema';
import link from '@/sanity/schema/link-schema';
import impactBlock from '@/sanity/schema/impact-block-schema';
import impact from '@/sanity/schema/impact-schema';
import instagramBlock from '@/sanity/schema/instagram-block-schema';
import donationRequest from '@/sanity/schema/donation-request-schema';
import donationLevel from '@/sanity/schema/donation-level-schema';
import staffMember from '@/sanity/schema/staff-member-schema';
import boardMember from '@/sanity/schema/board-member-schema';
import jobPosting from '@/sanity/schema/job-posting-schema';
import doc from '@/sanity/schema/doc-schema';
import action from '@/sanity/schema/action-schema';
import newsStory from '@/sanity/schema/news-story-schema';
import volunteerPage from '@/sanity/schema/volunteer-page-schema';
import faq from '@/sanity/schema/faq-schema';
import supportCategory from '@/sanity/schema/support-category-schema';
import wishlist from '@/sanity/schema/wishlist-schema';
import textBlock from '@/sanity/schema/text-block-schema';

const schemas = [
  homePage,
  aboutPage,
  volunteerPage,
  supportPage,
  wishlistPage,
  lunchBlock,
  lunchMenu,
  programsBlock,
  program,
  heroBlock,
  highlightBlock,
  address,
  social,
  link,
  impactBlock,
  impact,
  instagramBlock,
  donationRequest,
  donationLevel,
  staffMember,
  boardMember,
  jobPosting,
  doc,
  action,
  newsStory,
  faq,
  supportCategory,
  settings,
  wishlist,
  textBlock,
];

export default schemas;
