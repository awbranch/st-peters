import React from 'react';
import { getSupportPage } from '@/sanity/sanity-utils';
import Header from '@/components/Header';
import DonationRequestBlock from '@/components/DonationRequestBlock';
import {
  faBookOpenReader,
  faThumbsUp,
  faTypewriter,
  faCanFood,
  faBackpack,
  faShirt,
  faHandHeart,
  faCircleDollar,
  faPeopleGroup,
} from '@fortawesome/pro-solid-svg-icons';
import { SupportItem } from '@/types/SupportItem';
import SupportGridBlock from '@/components/SupportGridBlock';

export default async function SupportUs() {
  const page = await getSupportPage();

  const items: SupportItem[] = [
    { ...page.learn, icon: faBookOpenReader },
    { ...page.social, icon: faThumbsUp },
    { ...page.newsletter, icon: faTypewriter },
    { ...page.food, icon: faCanFood },
    { ...page.school, icon: faBackpack },
    { ...page.merch, icon: faShirt },
    { ...page.volunteer, icon: faHandHeart },
    { ...page.donate, icon: faCircleDollar },
    { ...page.join, icon: faPeopleGroup },
  ];

  return (
    <>
      <Header color={'pink'} currentMenu={'support-us'} />
      <main>
        <section id={'categories'}>
          <SupportGridBlock title={page.title} text={page.text} items={items} />
        </section>

        {page.singleDonation && (
          <section id="donate">
            <DonationRequestBlock
              color="white"
              orientation="right"
              request={page.singleDonation}
            />
          </section>
        )}
        {page.recurringDonation && (
          <section id="join">
            <DonationRequestBlock
              color="white"
              orientation="left"
              request={page.recurringDonation}
            />
          </section>
        )}
      </main>
    </>
  );
}
