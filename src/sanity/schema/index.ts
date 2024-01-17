import page from '@/sanity/schema/page-schema';
import footer from '@/sanity/schema/footer-schema';
import header from '@/sanity/schema/header-schema';

import blocks from '@/sanity/schema/blocks-schema';
import sectionBlocks from '@/sanity/schema/section-blocks-schema';
import shareableBlock from '@/sanity/schema/shareable-block-schema';

import action from '@/sanity/schema/action-schema';
import address from '@/sanity/schema/address-schema';
import button from '@/sanity/schema/button-schema';
import buttonRow from '@/sanity/schema/button-row-schema';
import buttonTile from '@/sanity/schema/button-tile-schema';
import cta from '@/sanity/schema/cta-schema';
import doc from '@/sanity/schema/doc-schema';
import donationLevel from '@/sanity/schema/donation-level-schema';
import faq from '@/sanity/schema/faq-schema';
import imageTile from '@/sanity/schema/image-tile-schema';
import impact from '@/sanity/schema/impact-schema';
import job from '@/sanity/schema/job-schema';
import link from '@/sanity/schema/link-schema';
import lunchMenu from '@/sanity/schema/lunch-menu-schema';
import listSetList from '@/sanity/schema/list-set-list-schema';
import menuItem from '@/sanity/schema/menu-item-schema';
import newsStory from '@/sanity/schema/news-story-schema';
import social from '@/sanity/schema/social-schema';
import teamGridMember from '@/sanity/schema/team-grid-member-schema';
import teamListMember from '@/sanity/schema/team-list-member-schema';

const schemas = [
  header,
  footer,
  page,
  ...blocks,
  ...sectionBlocks,
  shareableBlock,
  action,
  address,
  button,
  buttonRow,
  buttonTile,
  cta,
  doc,
  donationLevel,
  faq,
  imageTile,
  impact,
  job,
  link,
  lunchMenu,
  listSetList,
  menuItem,
  newsStory,
  social,
  teamGridMember,
  teamListMember,
];

export default schemas;
